/*
 * @Author: ldm
 * @Date: 2021-11-18 20:37:14
 * @LastEditors: ldm
 * @LastEditTime: 2021-12-12 04:45:45
 * @Description: 后端服务入口文档
 */
import express from "express";
import bodyPaser from "body-parser";
import loginRouter from "./routers/login";
import userRouter from "./routers/user";
import exhibitionRouter from './routers/exhibition'
const app = express();
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());

/**
 * router
 */
app.use("/", loginRouter); // 登陆相关接口
app.use("/", userRouter); // 用户相关接口
app.use("/", exhibitionRouter); // 会展相关接口

export default app;
