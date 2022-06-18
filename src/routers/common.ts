/*
 * @Description: 通用路由
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-22 23:56:34
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-23 00:19:12
 */

import { Router } from "express";
import CommonController from "../controllers/common";
const router = Router();
const { login } = CommonController;
router.post("/login", login);

export default router;
