/*
 * @Description: role 路由控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:01:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-03-22 20:43:00
 */

import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Role } from "../../entities/role";
class RoleController {
  static list = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const roleRepository = getRepository(Role);
      const list = await roleRepository.find();
      resp.send(list);
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
