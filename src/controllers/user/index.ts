/*
 * @Description: user 路由控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:01:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-12 03:26:35
 */

import { NextFunction, Request, Response } from "express";
import { User } from "../../entities/user";
import { getRepository } from "typeorm";
class UserController {
  static list = async (req: Request, resp: Response, next: NextFunction) => {
    const userRepository = getRepository(User);
    const list = await userRepository.find();
    console.log(list,'list')
    resp.send(list);
  };
  static detail = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("详情列表");
  };
  static create = async (req: Request, resp: Response, next: NextFunction) => {
    const userRepository = getRepository(User);
    const user = userRepository.create({
      nickname: "ekko",
      account: "18781932092",
    });
    userRepository.save(user);
    resp.send("创建成功");
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
  static deleteUser = async (
    req: Request,
    resp: Response,
    next: NextFunction
  ) => {
    resp.send("删除用户");
  };
}
export default UserController;
