/*
 * @Description: user 路由控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:01:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-08-05 17:42:24
 */

import { NextFunction, Request, Response } from "express";
import { User } from "../../entities/user";
import { Between, getRepository, ILike } from "typeorm";
import { COMMONT_CODE_MESSAGE, DEFAULT_QUERY_PARAMS } from "../../config";
import { USER_CODE_MESSAGE } from "./constans";

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
        ...params
      } = req.query;
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
      const [data, total] = await userRepository.findAndCount({
        cache: true,
        skip: +pageSize * (+current - 1),
        take: +pageSize,
        where,
      });
      console.log(req.query);
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
      const user = await userRepository.findOne(+id);
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
        discription = "",
        age,
        sex,
        email = "",
        phone = null,
      } = req.body;
      const createDate = Date.now();
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

      const user = userRepository.create({
        nickname,
        account,
        password,
        discription,
        createDate,
        age,
        sex,
        phone,
        email,
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
   * @description: 修改用户
   * @param {Request} req
   * @param {Response} resp
   * @param {NextFunction} next
   * @return {*}
   * @author: ldm
   */
  static edit = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const { nickname, account, password, id, discription } = req.body;
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

      //查询是否有重复用户
      const hasUser = await userRepository.findOne({ account });
      if (!!hasUser) {
        resp.status(200).json({
          ...USER_CODE_MESSAGE.hasUser,
        });
        return;
      }

      const user = await userRepository.findOne(+id);

      userRepository.merge(user, {
        nickname,
        discription,
        account,
        password,
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
  static eidtRole = async (
    req: Request,
    resp: Response,
    next: NextFunction
  ) => {
    resp.send("修改角色");
  };
  static deleteUser = async (
    req: Request,
    resp: Response,
    next: NextFunction
  ) => {
    resp.send("删除用户");
  };
}
export default UserController;
