import {Router, } from 'express'
import {getTask,getTasks,saveTask,updateTask,destroi,finisheTask} from './controllers/taskController'



const route =  Router();
route.get('/tasks', getTasks)
route.get('/tasks/:id', getTask)
route.post('/cad', saveTask)
route.put('/update/:id',updateTask)
route.delete('/del/:id',destroi)
route.patch('/save/:id',finisheTask) // indicapara alterar só um registro no banco

export default route

