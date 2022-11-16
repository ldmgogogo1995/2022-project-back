/*
 * @Description: role 路由控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:01:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-11-16 23:31:15
 */

import { NextFunction, Request, Response } from "express";
import { COMMONT_CODE_MESSAGE, DEFAULT_QUERY_PARAMS } from "../../config";
import { Between, getRepository, ILike } from "typeorm";
import { Role } from "../../entities/role";

import { formatSorter } from "../../utils/common";
import { ROLE_CODE_MESSAGE } from "./constants";
const { ok, error } = COMMONT_CODE_MESSAGE;
class RoleController {
  /**
   * @description: 不分页列表查询（用于表单填写）
   * @return {*}
   * @author: ldm
   */
  static list = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const roleRepository = getRepository(Role);
      const data = await roleRepository.find();
      resp.status(200).json({ ...ok, data });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description:分页角色列表
   * @return {*}
   * @author: ldm
   */
  static pageList = async (
    req: Request,
    resp: Response,
    next: NextFunction
  ) => {
    try {
      const roleRepository = getRepository(Role);
      const {
        pageSize = DEFAULT_QUERY_PARAMS.pageSize,
        current = DEFAULT_QUERY_PARAMS.current,
        startUpdateDate,
        endUpdateDate,
        startCreateDate,
        endCreateDate,
        name,
        direction = DEFAULT_QUERY_PARAMS.direction,
        field = DEFAULT_QUERY_PARAMS.field,
        ...params
      } = req.query;
      const frontSorter = {
        direction,
        field,
      } as any;
      //@ts-ignore
      const where: any = params;
      // 格式化前端排序字段
      const order = formatSorter(frontSorter);
      // 按名称查询
      if (name) {
        where.name = ILike(`%${name}%`);
      }
      // 按创建时间查询
      if (startCreateDate && endCreateDate) {
        where.name = Between(+startCreateDate, +endCreateDate);
      }
      // 按照修改时间查询
      if (startUpdateDate && endUpdateDate) {
        where.name = Between(+startUpdateDate, +endUpdateDate);
      }
      const [data, total] = await roleRepository.findAndCount({
        cache: true,
        skip: +pageSize * (+current - 1),
        take: +pageSize,
        where,
      });
      resp.status(200).json({ ...ok, data, total });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description: 角色详情
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
          ...ROLE_CODE_MESSAGE.lackUserId,
        });
        return;
      }
      const roleRepository = getRepository(Role);
      //@ts-ignore
      const role = await roleRepository.findOne(id);
      resp.status(200).json({ ...ok, data: role });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description: 创建角色
   * @param {Request} req
   * @param {Response} resp
   * @param {NextFunction} next
   * @return {*}
   * @author: ldm
   */
  static create = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const roleRepository = getRepository(Role);
      const { name = "", code = "", description, status = 1 } = req?.body;

      const role = roleRepository.create({
        name,
        code,
        description,
        status,
      });
      roleRepository
        .save(role)
        .then(() => {
          resp.status(200).json({ ...ok, data: role });
        })
        .catch((error) => {
          resp.status(200).json({
            ...error,
          });
        });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description:编辑角色
   * @param {Request} req
   * @param {Response} resp
   * @param {NextFunction} next
   * @return {*}
   * @author: ldm
   */
  static edit = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("修改");
  };
  static eidtRole = async (
    req: Request,
    resp: Response,
    next: NextFunction
  ) => {
    resp.send("修改角色");
  };

  /**
   * @description: 删除角色
   * @return {*}
   * @author: ldm
   */
  static deleteRole = async (
    req: Request,
    resp: Response,
    next: NextFunction
  ) => {
    try {
      const ids = Object.values(req.body) as string[];

      // // 缺少id
      if (!ids?.length) {
        resp.status(200).json({
          ...ROLE_CODE_MESSAGE.lackUserId,
        });
        return;
      }

      const roleRepository = getRepository(Role);
      const result = await await roleRepository.delete(ids);
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
export default RoleController;
