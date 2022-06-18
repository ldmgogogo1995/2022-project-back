/*
 * @Description: 检查是否登陆中间件
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-03-16 23:26:55
 * @LastEditors: ldm
 * @LastEditTime: 2022-05-18 01:27:52
 */
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../entities/user";
import { getRepository } from "typeorm";
import { TOKEN_CONFIG } from "../config";
const checkLogin =  () => {
  return async (
    req: Request<{ user: string }>,
    res: Response,
    next: NextFunction
  ) => {
    console.log("check login");
    try {
      let token = req.get("Authentication");
      const userRepository = getRepository(User);

      if (!token) {
        return res.status(401).end({ code: 401, msg: "无访问权限" });
      }
      token = token.split("Bearer ").at(1);
      const { userId } = jwt.verify(token, TOKEN_CONFIG.cert);
      req.user = await userRepository.findOne({ id: userId });
      next();
    } catch (error) {
      res.status(401).end({ code: 401, msg: "无访问权限" });
    }
  };
};
export default checkLogin
