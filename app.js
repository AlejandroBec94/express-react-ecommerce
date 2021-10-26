const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

//app
const app = express()

//routes
app.get('/', (req, res) => {
    res.send('Hello from node')
})

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB Connected');
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
