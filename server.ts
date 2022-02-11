/*
 * @Author: ldm
 * @Date: 2021-12-08 00:35:05
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-12 03:24:02
 * @Description: 服务开启页
 */

import app from "./src/app";
import "reflect-metadata";
import { createConnection } from "typeorm";
/**
 * 连接数据库
 */
createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "ldm541219",
  database: "exhibition_ management_web",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/src/entities/*.ts"],
}).then(() => {
  app.listen("1995", () => {
    console.log("server start in 1995..");
  });
});
