import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Tasks from '../entity/Tasks'
import { json } from 'body-parser'


class Task {
    constructor() {
        
    }

    // Listar todos registros
   async index(req: Request, res: Response) {

        const object =  await getRepository(Tasks).find()
        return res.json(object)    

    }
    // listar um registro especifico
    async show(req: Request, res: Response){

        const {id} = req.params
        console.log(id)
        const object = await getRepository(Tasks).findOne(id)
        return res.json(object)

    }
    //criar novo registro
    async store(req: Request, res: Response){

        const dados = req.body;
        console.log(dados)
        const object = getRepository(Tasks).save(dados)
        return res.json({msg: dados})

    }
    // altera um registro

    async update(req: Request, res: Response){

        const {id} = req.params
        const dados = req.body
        const object = await getRepository(Tasks).update(id,req.body)

        console.log(`${id} || ${dados} `)

            if(object.affected===1){
                return res.json({
                    msg: "Task atualizada com sucesso",
                    dadoss:dados
                })
            }else{
                return res.json({
                    msg: "Task não encontrada",
                })
            }
    }

    // Deletar um registro
    async desctroy(req: Request, res: Response){

        const {id} =  req.params
        const object = getRepository(Tasks).delete(id)
            if((await object).affected === 1){
                return res.json({msg:'Task deletada com sucesso!'})
            }
    }

    async finishedTask(req: Request, res: Response){

        const {id} = req.params
        const dados =await getRepository(Tasks).findOne(id)

        const object = await getRepository(Tasks).update(id,{
            finished:true
        })

            if(object.affected===1){
                res.json({"msg":"Task finalizada!",
                "dados":dados})
            }else{
                res.json({"msg":"Falha ao atualizar task"})
            }

    }

}

export default Task;