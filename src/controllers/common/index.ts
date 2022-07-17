/*
 * @Description: 公用控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-23 00:11:16
 * @LastEditors: ldm
 * @LastEditTime: 2022-07-16 01:11:03
 */
import { Request, Response, NextFunction } from "express";
import { User } from "../../entities/user";
import { getRepository } from "typeorm";
import { LOGIN_CODE_MESSAGE } from "./constants";
import { COMMONT_CODE_MESSAGE, TOKEN_CONFIG } from "../../config";
import jwt from "jsonwebtoken";
const { notFoundUser, passwordError } = LOGIN_CODE_MESSAGE;
const {} = COMMONT_CODE_MESSAGE;
class CommonController {
  static login = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const { account, password } = req.body;
      const { ok } = COMMONT_CODE_MESSAGE;
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ account });
      if (!user) {
        // 不存在该用户
        resp.status(200).json({ ...notFoundUser });
        return;
      } else {
        // 检查密码
        if (user.password !== password) {
          resp.status(200).json({ ...passwordError });
          return;
        }
        // 生成登陆状态标识token
        const token = jwt.sign({ userId: user.id }, TOKEN_CONFIG.cert, {
          expiresIn: "1h",
        });
        resp.status(200).json({ ...ok, data: { user, token } });
      }
    } catch (error) {
      next(error);
    }
  };
}
export default CommonController;
