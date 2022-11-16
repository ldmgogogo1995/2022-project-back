/*
 * @Description: 用户路由
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:14:50
 * @LastEditors: ldm
 * @LastEditTime: 2022-11-09 00:48:58
 */
import { Router } from "express";
import RoleController from "../controllers/role";

const router = Router();
const { pageList, detail, create, edit, deleteRole, list } = RoleController;
router
  .get("/page", pageList)
  .get("/list", list)
  .get("/detail", detail)
  .post("/create", create)
  .put("/:id", edit)
  .delete("/:id", deleteRole);

export default router;
