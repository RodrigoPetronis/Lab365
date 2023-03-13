const express = require("express")
const app = express()

app.use(express.json())

app.get('/first/',(req,resp)=>{
    resp.send('Pegou a rota first')
})

app.get('/first/:idUser/books/:idBook',(req,resp)=>{
    resp.send(req.params) // retorna um json com todos os parametros da URI
})

app.get('/second/:id/produtos/:idProduto',(req,resp)=>{
    resp.send(req.params.idProduto) //retorna o parametro específico solicitado
})

app.post('/first',(req,resp)=>{
    console.log(req.body)
    resp.send('Solicitação de post efetuada')
})

app.put('/first',(req,resp)=>{
    console.log(req.body) 
    resp.send('Usuario alterado') //Metodo Put altera TODO o conteúdo
})

app.patch('/first',(req,resp)=>{
    console.log(req.body)
    resp.send('Alterado algum item do body') //Metodo Patch altera parte do conteúdo
})

app.delete('/deleteUser/:id', (req, res) => {
   
    let users = [
        { id: 1, nome: "Tinki winky" },
        { id: 2, nome: "Dipsy" },
        { id: 3, nome: "Lala" },
        { id: 4, nome: "Pow" },
        { id: 5, nome: "é hora de dar tchau" }
    ]
    let searchUser = users.filter((e) => { // filtra item igual ao parametro passado na url
        return e.id == req.params.id
    })

    if (searchUser.length) {//encontrou algum item dps de passar pelo filter
        res
            .status(200)
            .send("Usuario Deletado")
    } else {
        res.status(404)
            .send("Usuario não encontrado")
    }

})


app.listen(3333,()=>{
    console.log("conectadooooo")
})
