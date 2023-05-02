const express = require("express");

const app = express()
const port = 5000

const cors = require('cors')
app.use(cors())

const chef = require('./data/chef.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(n => n._id === id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})