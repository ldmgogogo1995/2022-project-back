/*
 * @Description: 通用路由
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-22 23:56:34
 * @LastEditors: ldm
 * @LastEditTime: 2022-07-19 01:29:51
 */

import { Router } from "express";
import CommonController from "../controllers/common";
const router = Router();
const { login,permissions } = CommonController;
router.post("/login", login);
router.get("/permissions", permissions);

export default router;
