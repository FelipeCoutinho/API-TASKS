import {Router, } from 'express'
import {getTask,getTasks,saveTask,updateTask,destroi,finisheTask} from './controllers/taskController'
import Task from './controllers/task';


const task = new Task()
const route =  Router();

route.get('/', task.index)
route.get('/find/:id', task.show)
route.post('/newTask', task.store)
route.delete('/delete/:id', task.desctroy)
route.put('/updateTask/:id', task.update)
route.put('/finishedTask/:id', task.finishedTask)


route.get('/tasks', getTasks)
route.get('/tasks/:id', getTask)
route.post('/cad', saveTask)
route.put('/update/:id',updateTask)
route.delete('/del/:id',destroi)
route.patch('/save/:id',finisheTask) // indicapara alterar só um registro no banco

export default route

