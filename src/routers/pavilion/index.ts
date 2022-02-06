
import express, { Request, Response } from 'express'

const router = express.Router()


router.get('/pavilion', (req: Request, res: Response) => {
    console.log(req.body, 'rep')
    console.log('展馆接口访问成功')
    res.send(`展馆接口访问成功`)
})

export default router