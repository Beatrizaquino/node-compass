const express = require('express');
const app = express();

const path = require('path');
//Quando usar o método static?
//É recomendado o uso de classes estáticas 
//para manter métodos não associados com um objeto específico. Elas são caracterizadas por não poderem ser herdadas, já que são seladas
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
})

app.all('*', (req,res) =>{
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})