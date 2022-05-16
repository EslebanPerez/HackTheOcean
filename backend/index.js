const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

let transactionArr = []
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*\*"
}))

app.use(cors());
//
app.get('/transaction', (req,res) => {
    res.send('Me hicieron un get a app transaaciontioons')
})
app.post('/transaction', (req,res) => {
    let transaction = req.body;
    transactionArr.push(transaction);
    res.send(JSON.stringify("Guardada"));
    console.log(transactionArr);
})

app.listen(port, () => {
    console.log(`Estoy ejecutandome en http://localhost:${port}`)
})

