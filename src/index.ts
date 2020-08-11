import * as dotenv from 'dotenv'
import "reflect-metadata"
import {createConnection} from "typeorm"
import route from './routes'
import * as express from 'express'
import * as bodyparser from 'body-parser'
import * as cors from 'cors'

dotenv.config()// para o app poder ler os aquivos .env
const app = express()

createConnection()
app.use(cors())
app.use(bodyparser.json())// tem que ser antes das rotas
app.use(route)

app.listen(process.env.PORT || 5555,()=>{
    console.log('server on port: 5555')
})

