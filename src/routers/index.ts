/*
 * @Description:
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 00:30:07
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-23 00:35:25
 */
import express from "express";
import user from "./user";
import role from "./role";
import exhibition from "./exhibition";
import common from "./common";
const router = express.Router();
// 用户路由
router.use("/user", user);
// 角色路由
router.use("/role", role);
// 展会路由
router.use("/exhibition", exhibition);
// 通用路由
router.use("/common", common);

export default router;
