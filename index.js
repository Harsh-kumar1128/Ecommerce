const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.port
const dbconnect = require('./config/dbconnect')
const bodyparser = require('body-parser')
const routes = require('./Router/Emproute')
const orderroute = require('./Router/Orderroute')


dbconnect()
app.use(bodyparser.json())
app.use('/api',routes)
app.use('/api',orderroute)

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`)
})
