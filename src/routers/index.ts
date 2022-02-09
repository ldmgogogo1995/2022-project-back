/*
 * @Description:
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 00:30:07
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-10 01:25:51
 */
import express from "express";
import user from "./user";
const router = express.Router();
// 用户路由
router.use("/user", user);

export default router;
