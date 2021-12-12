/*
 * @Author: ldm
 * @Date: 2021-11-18 20:37:14
 * @LastEditors: ldm
 * @LastEditTime: 2021-12-12 04:45:45
 * @Description: 后端服务入口文档
 */
import express from 'express'
import bodyPaser from 'body-parser'
import LoginRouter from './src/routers/login'
const app = express()
app.use(bodyPaser.urlencoded({ extended: false }))
app.use(bodyPaser.json())

/** 
 * router
*/
app.use('/', LoginRouter)


export default app