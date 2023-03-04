import express from "express";

const app = express();
app.use(express.json())

app.get('/', (req, response) => {
    response.send('Hello World')
})
app.get('/rotas', (req, response) => {
    response.send('Hello Rody')
})

app.listen(3333)


app.get('/listagem/:nome', (req, response) => {
    const { nome}= requisicao.params//path é obrigatorio
    const {idadade}= requisicao.query //é opcional, o back pega sequiser ou nao
}) 

//:nome representa uma variavel PATH PARAMS
//post cria dados
//patch atualização de dados
// delete
//body 
//query
//path