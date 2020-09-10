import Task from '../entity/Tasks'
import { getRepository, AfterLoad } from 'typeorm'
import { Request, Response } from 'express'
import { json } from 'body-parser'

export const getTasks = async (req: Request, res: Response)=>{
    const tasks = await getRepository(Task).find()
    return res.json(tasks)
}

export const getTask = async (req: Request, res: Response)=>{
    const {id} = req.params // desistrututação
    const task = await getRepository(Task).findOne(id)
    return res.json(task)
}

export const saveTask = async (req: Request, res: Response)=>{
    const cadTask = await getRepository(Task).save(req.body);
    return res.json(cadTask)
    
}

export const updateTask = async (req: Request,res: Response)=>{
    const {id}  = req.params
    const dados = req.body
    const task = getRepository(Task).update(id,req.body)
    console.log(`${id} || ${dados} `)
    // ele retorna se alguma task foi afetada no banco de dados
    if((await task).affected===1){
        // tráz um number dizendo quantas linhas foram afetadas
        const updatedTast =await getRepository(Task).findOne(id)
        return res.json(updatedTast)
    }
    return res.status(404).json({msg:'Task not found'})
}

export const destroi = async (req: Request,res: Response)=>{
    const {id} = req.params

    const deleteTask = getRepository(Task).delete(id)

    if((await deleteTask).affected===1){
        return res.json({msg:'Task remodeved'})
    }

    res.json({msg:'task not found'})
}


// Dizer se a tarefa está finalizada
export const finisheTask = async (req: Request,res: Response)=>{
    const {id} = req.params

    const task = getRepository(Task).update(id,{
        finished:true
    })

    if((await task).affected===1){
        return res.json({msg:"task finished"})
    }

    return res.json({msg:"task not found"})
}


