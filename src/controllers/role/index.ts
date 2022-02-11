/*
 * @Description: role 路由控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:01:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-11 01:33:31
 */

import { NextFunction, Request, Response } from "express";
class RoleController {
  static list = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("用户列表");
  };
  static detail = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("详情列表");
  };
  static create = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("创建");
  };
  static edit = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("修改");
  };
  static eidtRole = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("修改角色");
  };
  static deleteRole = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("删除用户");
  };
}
export default RoleController;
