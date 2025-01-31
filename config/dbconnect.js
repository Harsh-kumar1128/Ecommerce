const mongoose = require('mongoose')
require('dotenv').config()

const dbconnect = async (req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connection Successfully")
    } catch (error) {
        console.log('NOt Connected')
    }
}
module.exports = dbconnect