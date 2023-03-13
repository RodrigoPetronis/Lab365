const {Router, response} = require('express');

const router = Router()

lojasList = [
    {   
        id:1,
        loja:"Magazine_Luiza",
        km:2.3,
    },
    {
        id:2,
        loja:"Carrefour",
        km:2.9,
    },
    {
        id:3,
        loja:"Americanas",
        km:4,
    }
]

router.get('/lojas',(req, res)=>{
    const {km} = req.query
    const parsedKm = parseFloat(km)
    if(!isNaN(parsedKm)){
    const filteredLojas = lojasList.filter((e)=> e.km <= parsedKm)
        res.send(filteredLojas)
    }else{
        res.send(lojasList)
    }
    
})


module.exports = router;