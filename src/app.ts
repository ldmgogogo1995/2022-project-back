/*
 * @Author: ldm
 * @Date: 2021-11-18 20:37:14
 * @LastEditors: ldm
 * @LastEditTime: 2022-03-22 00:53:16
 * @Description: 后端服务入口文档
 */
import express, { application, Express } from "express";
import bodyPaser from "body-parser";
import router from "./routers";
import cors from "cors";

const app: Express = express();


app.use(cors());
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());
/**
 * router
 */
app.use("/api", router);

export default app;
