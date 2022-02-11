/*
 * @Description: 用户路由
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:14:50
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-10 22:45:10
 */
import { Router } from "express";
import RoleController from "../controllers/role";

const router = Router();
const { list, detail, create, edit, deleteRole, eidtRole } = RoleController;
router
  .get("/list", list)
  .get("/detail", detail)
  .post("/create", create)
  .put("/:id", edit)
  .delete("/:id", deleteRole)
  .patch("/role", eidtRole);

export default router;
