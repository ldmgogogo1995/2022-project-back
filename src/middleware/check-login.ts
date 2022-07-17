/*
 * @Description: 检查是否登陆中间件
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-03-16 23:26:55
 * @LastEditors: ldm
 * @LastEditTime: 2022-07-18 00:25:40
 */
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../entities/user";
import { getRepository } from "typeorm";
import { TOKEN_CONFIG } from "../config";
const checkLogin = () => {
  return async (
    req: Request<{ user: string }>,
    res: Response,
    next: NextFunction
  ) => {

    try {
      // 从请求头获取token
      let token = req.get("Authentication");
      const userRepository = getRepository(User);
      console.log(token, "token");
      if (!token) {
        return res.status(401).end('无访问权限');
      }
      token = token.split("Bearer ")?.[1]; // 注意后Bearer加一个空格
      console.log(token,'tttt')
      // @ts-ignore
      const { userId } = jwt.verify(token, TOKEN_CONFIG.cert);
      //@ts-ignore
      req.user = await userRepository.findOne({ id: userId });
      next();
    } catch (error) {
      console.log(error,'eee')
      res.status(401).end('无访问权限');
    }
  };
};
export default checkLogin;
