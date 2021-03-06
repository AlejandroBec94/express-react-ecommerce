const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()
// import routes
const userRoutes = require('./routes/user')

//app
const app = express()

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

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
