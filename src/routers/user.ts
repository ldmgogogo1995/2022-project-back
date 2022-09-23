/*
 * @Description: 用户路由
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:14:50
 * @LastEditors: ldm
 * @LastEditTime: 2022-09-24 02:02:37
 */
import { Router } from "express";
import UserController from "../controllers/user";

const router = Router();
const { list, detail, create, edit, deleteUser, updateStatus } = UserController;
router
  .get("/list", list)
  .get("/detail", detail)
  .post("/create", create)
  .put("/", edit)
  .delete("/", deleteUser)
  .put("/updateStatus", updateStatus);

export default router;
