const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
// import routes
const userRoutes = require('./routes/user')

//app
const app = express()

//routes middleware
//user
app.use('/api', userRoutes)

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
