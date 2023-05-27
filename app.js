const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/', (req,res) => {
    res.send('<h1> Home page</h1><a href="/api/products">product</a>')
})

app.get('/api/products', (req,res) => {
    //Caso você queira obter um novo array cujos itens podem ser gerados a partir da aplicação dos itens originais em uma determinada função,
    // então use o map.Se você precisa apenas percorrer um array e executar um determinado bloco de código para cada item, então use o forEach.
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

// const path = require('path');
// //Quando usar o método static?
// //É recomendado o uso de classes estáticas 
// //para manter métodos não associados com um objeto específico. Elas são caracterizadas por não poderem ser herdadas, já que são seladas
// app.use(express.static('./public'))

// // app.get('/', (req, res) => {
// //     res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
// // })

app.all('*', (req,res) =>{
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})

