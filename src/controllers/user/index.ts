/*
 * @Description: user 路由控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:01:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-09-24 02:16:20
 */

import { NextFunction, Request, Response } from "express";
import { User } from "../../entities/user";
import { Between, getRepository, ILike } from "typeorm";
import { COMMONT_CODE_MESSAGE, DEFAULT_QUERY_PARAMS } from "../../config";
import { USER_CODE_MESSAGE } from "./constans";
import { formatSorter } from "../../utils/common";
import { Role } from "../../entities/role";

const { ok, error } = COMMONT_CODE_MESSAGE;
class UserController {
  /**
   * @description: 查看用户列表
   * @param {Request} req
   * @param {Response} resp
   * @param {NextFunction} next
   * @return {*}
   * @author: ldm
   */
  static list = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const userRepository = getRepository(User);
      const {
        pageSize = DEFAULT_QUERY_PARAMS.pageSize,
        current = DEFAULT_QUERY_PARAMS.current,
        startUpdateDate,
        endUpdateDate,
        startCreateDate,
        endCreateDate,
        nickname,
        direction = DEFAULT_QUERY_PARAMS.direction,
        field = DEFAULT_QUERY_PARAMS.field,
        ...params
      } = req.query;
      const frontSorter = {
        direction,
        field,
      } as any;
      // 格式化前端排序字段
      const order = formatSorter(frontSorter);
      //@ts-ignore
      const where: any = params;
      // 按名称查询
      if (nickname) {
        where.nickname = ILike(`%${nickname}%`);
      }
      // 按创建时间查询
      if (startCreateDate && endCreateDate) {
        where.nickname = Between(+startCreateDate, +endCreateDate);
      }
      // 按照修改时间查询
      if (startUpdateDate && endUpdateDate) {
        where.nickname = Between(+startUpdateDate, +endUpdateDate);
      }
      //@ts-ignore
      const [data, total] = await userRepository.findAndCount({
        cache: true,
        skip: +pageSize * (+current - 1),
        take: +pageSize,
        where,
        order,
        relations: ["roles"],
      });
      resp.status(200).json({ ...ok, data, total });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description:查看用户详情
   * @param {Request} req
   * @param {Response} resp
   * @param {NextFunction} next
   * @return {*}
   * @author: ldm
   */
  static detail = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const { id } = req.query;
      // 缺少id
      if (!id) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.lackUserId,
        });
        return;
      }
      const userRepository = getRepository(User);
      //@ts-ignore
      const user = await userRepository.findOne(id, {
        relations: ["roles"],
      });
      resp.status(200).json({ ...ok, data: user });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description: 新增用户
   * @param {Request} req
   * @param {Response} resp
   * @param {NextFunction} next
   * @return {*}
   * @author: ldm
   */
  static create = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const {
        nickname,
        account,
        password,
        description = "",
        age,
        sex,
        email = "",
        phone = null,
        roles = [],
      } = req.body;
      // 校验必填参数
      if (!nickname) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.nickname,
        });
        return;
      }
      if (!account) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.account,
        });
        return;
      }
      if (!password) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.password,
        });
        return;
      }
      if (!age) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.age,
        });
        return;
      }
      if (!sex) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.sex,
        });
        return;
      }

      const userRepository = getRepository(User);

      //查询是否有重复用户
      const hasUser = await userRepository.findOne({ account });
      if (!!hasUser) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.hasUser,
        });
        return;
      }
      const roleRepository = getRepository(Role);
      const _roles = await roleRepository.findByIds(roles);
      const user = userRepository.create({
        nickname,
        account,
        password,
        description,
        age,
        sex,
        phone,
        email,
        roles: _roles,
      });
      userRepository
        .save(user)
        .then(() => {
          resp.status(200).json({ ...ok, data: user });
        })
        .catch((err) => {
          resp.status(200).json({
            ...error,
          });
        });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description: 修改用户
   * @param {Request} req
   * @param {Response} resp
   * @param {NextFunction} next
   * @return {*}
   * @author: ldm
   */
  static edit = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const {
        nickname,
        account,
        password,
        id,
        description,
        age,
        roles = [],
        sex,
        email,
      } = req.body;
      const updateDate = Date.now();
      // 校验必填参数
      if (!id) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.id,
        });
        return;
      }
      if (!nickname) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.nickname,
        });
        return;
      }
      if (!account) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.account,
        });
        return;
      }
      if (!password) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.password,
        });
        return;
      }
      const userRepository = getRepository(User);
      const roleRepository = getRepository(Role);
      const user = await userRepository.findOne(+id);
      const _roles = await roleRepository.findByIds(roles);

      userRepository.merge(user, {
        nickname,
        description,
        account,
        password,
        updateDate,
        age,
        sex,
        email,
        roles: _roles,
      });
      userRepository
        .save(user)
        .then(() => {
          resp.status(200).json({ ...ok, data: user });
        })
        .catch(() => {
          resp.status(200).json({
            ...error,
          });
        });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description:启用/禁用角色
   * @return {*}
   * @author: ldm
   */
  static updateStatus = async (
    req: Request,
    resp: Response,
    next: NextFunction
  ) => {
    try {
      const updateDate = Date.now();
      const { id, status = 1 } = req.body;

      // 校验必填参数
      if (!id) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.id,
        });
        return;
      }

      const userRepository = getRepository(User);
      const user = await userRepository.findOne(id);
      userRepository.merge(user, {
        status,
        updateDate,
      });
      userRepository
        .save(user)
        .then(() => {
          resp.status(200).json({ ...ok, data: user });
        })
        .catch(() => {
          resp.status(200).json({
            ...error,
          });
        });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description:删除用户
   * @return {*}
   * @author: ldm
   */
  static deleteUser = async (
    req: Request,
    resp: Response,
    next: NextFunction
  ) => {
    try {
      const ids = Object.values(req.body) as string[];

      // // 缺少id
      if (!ids?.length) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.lackUserId,
        });
        return;
      }

      const userRepository = getRepository(User);
      const result = await await userRepository.delete(ids);
      //删除成功
      if (!!result.affected) {
        resp.status(200).json({ ...ok });
      } else {
        resp.status(200).json({ ...error });
      }
    } catch (error) {
      next(error);
    }
  };
}
export default UserController;
