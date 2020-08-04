import {Request, Response} from 'express'
import { Task } from '../entity/Tasks'

interface tasks{
     index(): any
     show(): any
     store(): any
     update(id: any): any
     destroy(id: any): any
}

export default Task