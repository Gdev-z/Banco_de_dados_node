import express from 'express'
import { PrismaClient } from './generated/prisma/client.js'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.get('/usuarios', async (req, res) =>{

    const users = await prisma.user.findMany()
   
    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) =>{

    const user = await prisma.user.create({
        data:{
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    console.log(user)

    res.status(201).json({ message: "Usuário Criado com sucesso"})
})

app.put('/usuarios/:id', async (req, res) =>{

    
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data:{
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({ message: 'Usuário deletado com suceso!'})
})

app.listen(3000)


//req - requisição
//res - resposta


/* 
usuario:
gabrielzanondev_db_user

password:
7gWqrHpEjvSbnlSa

*/