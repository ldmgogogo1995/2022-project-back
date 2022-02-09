/*
 * @Author: ldm
 * @Date: 2021-11-18 20:37:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-10 01:08:09
 * @Description: 后端服务入口文档
 */
import express from "express";
import bodyPaser from "body-parser";
import router from './routers'
const app = express();
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());

/**
 * router
 */
app.use('/api',router)

export default app;
