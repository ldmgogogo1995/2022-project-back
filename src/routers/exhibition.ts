/*
 * @Description: 用户路由
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:14:50
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-10 22:45:13
 */
import { Router } from "express";
import ExhibitionController from "../controllers/exhibition";

const router = Router();
const { list, detail, create, edit, deleteExhibition } = ExhibitionController;
router
  .get("/list", list)
  .get("/detail", detail)
  .post("/create", create)
  .put("/:id", edit)
  .delete("/:id", deleteExhibition);

export default router;
