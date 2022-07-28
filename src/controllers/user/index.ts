/*
 * @Description: user 路由控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:01:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-07-25 23:00:30
 */

import { NextFunction, Request, Response } from "express";
import { User } from "../../entities/user";
import { getRepository } from "typeorm";
import { COMMONT_CODE_MESSAGE } from "../../config";
import { USER_CODE_MESSAGE } from "./constans";

const { ok, error } = COMMONT_CODE_MESSAGE;
class UserController {
  static list = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const userRepository = getRepository(User);
      const list = await userRepository.find();
      resp.status(200).json({ ...ok, data: list });
    } catch (error) {
      next(error);
    }
  };
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
  static create = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const { nickname, account, password, discription = "" } = req.body;
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
  static edit = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const { nickname, account, password, id, discription } = req.body;
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

      userRepository.merge(user, { nickname, discription, account, password });
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
