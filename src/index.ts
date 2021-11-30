import express, { NextFunction, Response, Request } from 'express'

const api = express()

api.get('/test', (req: Request, res:Response, next:NextFunction) =>{
    res.json({sucess: true})
})


api.listen(3000, () =>{
    console.log('servidor rodando')
})