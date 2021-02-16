import express, { Request, Response } from 'express'
import { blue, green } from 'chalk'
import { reqLogger } from './loggers/request.logger'
import { AuthRouter } from './routes/Auth'
const app = express()

require('./database/Connect')

app.use(reqLogger)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', AuthRouter)

app.listen(3000, () => {
    console.log(`[${blue('INFO')}] API Is Online!`)
    console.log(`[${green('API')}] Listening In Port 3000!`)
})