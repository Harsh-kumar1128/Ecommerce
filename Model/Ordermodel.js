const mongoose = require('mongoose')
const Ordermodel = new mongoose.Schema({

    ordname:{
        type:String,
        require:true
    },
    ordquantity:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    payment:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model('Order',Ordermodel)