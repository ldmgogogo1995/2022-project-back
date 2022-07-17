/*
 * @Author: ldm
 * @Date: 2021-11-18 20:37:14
 * @LastEditors: ldm
 * @LastEditTime: 2022-07-18 00:11:34
 * @Description: 后端服务入口文档
 */
import express, { application, Express } from "express";
import bodyPaser from "body-parser";
import router from "./routers";
import cors from "cors";
import checkLogin from "./middleware/check-login";

const app: Express = express();

app.use(cors());
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());
app.use("/api", (req, res, next) => {

  if (req.path === "/common/login") {
    return next();
  }
  // 需要校验权限的接口
  //@ts-ignore
  checkLogin()(req, res, next);
});
/**
 * router
 */
app.use("/api", router);

export default app;
