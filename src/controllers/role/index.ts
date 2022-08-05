/*
 * @Description: role 路由控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:01:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-08-06 03:02:18
 */

import { NextFunction, Request, Response } from "express";
import { COMMONT_CODE_MESSAGE, DEFAULT_QUERY_PARAMS } from "../../config";
import { Between, getRepository, ILike } from "typeorm";
import { Role } from "../../entities/role";
const { ok, error } = COMMONT_CODE_MESSAGE;
class RoleController {
  static list = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const userRepository = getRepository(Role);
      const {
        pageSize = DEFAULT_QUERY_PARAMS.pageSize,
        current = DEFAULT_QUERY_PARAMS.current,
        startUpdateDate,
        endUpdateDate,
        startCreateDate,
        endCreateDate,
        name,
        ...params
      } = req.query;
      //@ts-ignore
      const where: any = params;
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
      const [data, total] = await userRepository.findAndCount({
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
  static detail = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("详情列表");
  };
  static create = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const roleRepository = getRepository(Role);
      const {
        name = "",
        code = "",
        discription,
        status = "forbidden",
      } = req?.body;

      const role = roleRepository.create({
        name,
        code,
        discription,
        status,
      });
      roleRepository.save(role);
      resp.send("创建成功2323");
    } catch (error) {
      resp.send("创建失败");
    }
  };
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
  static deleteRole = async (
    req: Request,
    resp: Response,
    next: NextFunction
  ) => {
    resp.send("删除用户");
  };
}
export default RoleController;
