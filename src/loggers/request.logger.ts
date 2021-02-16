import { Request, Response, NextFunction } from 'express'
import { blue, red } from 'chalk'

const reqLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${red('REQUEST')}] Method: ${req.method} URL: ${req.originalUrl}`)
    const start = new Date().getTime()
    res.on('finish', () => {
        const elapsed = new Date().getTime() - start;
        console.log(`[${blue('FINISHED')}] Method: ${req.method} URL: ${req.originalUrl} Code: ${req.statusCode} Ping: ${elapsed}ms`)
    })
    next()
}

export { reqLogger }