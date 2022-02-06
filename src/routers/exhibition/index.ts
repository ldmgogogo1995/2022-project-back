
import express, { Request, Response } from 'express'

const router = express.Router()


router.get('/exhibition', (req: Request, res: Response) => {
    console.log(req.body, 'rep')
    console.log('会展接口访问成功')
    res.send(`会展接口访问成功`)
})

export default router