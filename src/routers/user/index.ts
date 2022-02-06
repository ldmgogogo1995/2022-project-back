import express, { Request, Response } from "express";

const router = express.Router();

router.get("/user", (req: Request, res: Response) => {
  console.log(req.body, "user");
  console.log("用户接口访问成功");
  res.send("请求用户列表成功");
});

export default router;
