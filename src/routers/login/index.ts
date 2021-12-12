/*
 * @Author: ldm
 * @Date: 2021-12-07 21:56:16
 * @LastEditors: ldm
 * @LastEditTime: 2021-12-12 04:48:10
 * @Description: 登录相关接口
 */
import express, { Request, Response } from 'express'

const router = express.Router()


router.get('/login', (req: Request, res: Response) => {
    console.log(req.body, 'rep')
    const { username, pwd } = req?.body
    console.log('登录接口访问成功')
    res.send(`欢迎${username}登陆系统`)
})

export default router
