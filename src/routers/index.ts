/*
 * @Description:
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 00:30:07
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-10 22:45:18
 */
import express from "express";
import user from "./user";
import role from "./role";
import exhibition from "./exhibition";
const router = express.Router();
// 用户路由
router.use("/user", user);
// 角色路由
router.use("/role", role);
// 展会路由
router.use("/exhibition", exhibition);

export default router;
