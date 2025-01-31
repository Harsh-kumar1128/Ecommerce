const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.port
const dbconnect = require('./config/dbconnect')
const bodyparser = require('body-parser')
const routes = require('./Router/Emproute')



dbconnect()
app.use(bodyparser.json())
app.use('/api',routes)
app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`)
})
