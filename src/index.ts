import "reflect-metadata"
import {createConnection} from "typeorm"
import route from './routes'
import * as express from 'express'
import * as bodyparser from 'body-parser'
import * as cors from 'cors'

const app = express()

createConnection()
app.use(cors())
app.use(bodyparser.json())// tem que ser antes das rotas
app.use(route)
app.listen(5555,()=>{
    console.log('server on')
})

