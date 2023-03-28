const express = require('express')
const app = express()
const PORT = 8001

const mongoose = require('mongoose')
const morgan  = require('morgan')
const bodyParser = require('body-parser')

const employeeRoutes = require('./router')

const mongoURI = 'mongodb+srv://root_mongodb:root@sit-home.nif9h1n.mongodb.net/testdb?retryWrites=true&w=majority'
mongoose.connect(mongoURI, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', err => console.log(err))
db.once('open', err => console.log('Databse connection successfully'))

// app.use(morgan(dev))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())


app.listen(PORT, () => {
    console.log(`Server connected at port ${PORT}`)
})

app.use('/api/employee', employeeRoutes)