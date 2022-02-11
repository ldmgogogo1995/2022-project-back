/*
 * @Description: Exhibition 路由控制器
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-10 01:01:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-11 01:31:49
 */

import { Request, Response, NextFunction } from "express";
class ExhibitionController {
  static list = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("展会列表");
  };
  static detail = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("详情列表");
  };
  static create = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("创建");
  };
  static edit = async (req: Request, resp: Response, next: NextFunction) => {
    resp.send("修改");
  };
  static deleteExhibition = async (
    req: Request,
    resp: Response,
    next: NextFunction
  ) => {
    resp.send("删除展会");
  };
}
export default ExhibitionController;
