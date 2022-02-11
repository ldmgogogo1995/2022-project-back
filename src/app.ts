/*
 * @Author: ldm
 * @Date: 2021-11-18 20:37:14
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-12 03:28:22
 * @Description: 后端服务入口文档
 */
import express from "express";
import bodyPaser from "body-parser";
import router from "./routers";

const app = express();
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());
/**
 * router
 */
app.use("/api", router);

export default app;
