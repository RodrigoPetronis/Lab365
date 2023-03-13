const { urlencoded } = require('express')
const express = require('express')
const app = express()
const PORT = 3333

const mercadoRoutes = require('./routes/mercado')
const lojasRoutes = require('./routes/lojas')


app.use(express.json())
app.use(urlencoded())

app.use((req,res,next)=>{
    console.log(`${req.method}:${req.url}`)
    next();
})

app.use('/api', mercadoRoutes)
app.use('/api', lojasRoutes)



app.listen(PORT, () => console.log(`Running Express Server on PORT ${PORT}`));



