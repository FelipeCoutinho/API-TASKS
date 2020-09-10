import {Router, } from 'express'
import Task from './controllers/task';


const task = new Task()
const route =  Router();

route.get('/', task.index)
route.get('/find/:id', task.show)
route.post('/newTask', task.store)
route.delete('/delete/:id', task.desctroy)
route.put('/updateTask/:id', task.update)
route.patch('/finishedTask/:id', task.finishedTask)

export default route

