/*
 * @Description: user 路由控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:01:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-03-12 00:43:18
 */

import { NextFunction, Request, Response } from "express";
import { User } from "../../entities/user";
import { getRepository } from "typeorm";
class UserController {
  static list = async (req: Request, resp: Response, next: NextFunction) => {
    const userRepository = getRepository(User);
    const list = await userRepository.find();
    resp.send(list);
  };
  static detail = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("详情列表");
  };
  static create = async (req: Request, resp: Response, next: NextFunction) => {
    const userRepository = getRepository(User);

    const user = userRepository.create({
      nickname: "ekko2",
      account: "18781932092",
      password:'ldm541219',
      discription:'超级管理元'
    });
    userRepository.save(user);
    resp.send("创建成功2");
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
