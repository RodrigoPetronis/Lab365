const {Router} = require('express')
const mercadoList=[{
    item: 'leite',
    quantidade: 5,
},
{
    item: 'cereal',
    quantidade: 8,
},
{
    item: 'manteiga',
    quantidade: 9
}]

const router = Router()

/* router.get('/mercado',(req, res) => {
    res.send(mercadoList)
    console.log('root')
}) */

router.get('/mercado/:item',(req,res)=>{
    const {item} = req.params
    const mercadoItem = mercadoList.find((e)=> e.item === item)
    res.send(mercadoItem)
})

router.get('/mercado',(req,res)=>{
    const {quantidade} = req.query
    const parsedQuantidade = parseInt(quantidade)
   if(!isNaN(parsedQuantidade)){
        const newList = mercadoList.filter((e)=> e.quantidade <= parsedQuantidade)
        console.log(newList)
        res.send(newList)
    }else{
        res.send(mercadoList)
    }
})

router.post('/mercado', (req,res)=>{
    console.log(req.body)
    mercadoList.push(req.body)
    res.send(201)
})

router.put('/mercado', (req,res)=>{
    console.log(req.body)
})


module.exports = router;