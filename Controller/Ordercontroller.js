const OrderSchema = require('../Model/Ordermodel')

//OrderCReate
const Ordercreate = async(req,res)=>{
    try {
        const {ordname} = req.body
        const order = await OrderSchema.findOne({ordname})
        if(order){
            return res.status(400).json('Order Name is Already Registered')
        }
        const ordercrt = new OrderSchema(req.body)
        await ordercrt.save()
        res.status(200).json('Order Created Successfully')
    } catch (error) {
       res.status(500).json({error:error.message}) 
    }
}

//All OrderGet
const AllOrderget = async(req,res)=>{
  try {
    const getall = await OrderSchema.find()
    res.status(200).json(getall)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}
//OrderGetBy Id
const Ordergetbyid = async(req,res)=>{
    try {
       const getid = await OrderSchema.findById(req.params._id)
       if(!getid){
        res.status(400).json('Order is not Found')
       }
       res.status(201).json(getid) 
    } catch (error) {
        res.status(500).json({error:error.mesage})
    }
}

//OrderUpdate
const Orderupdate = async(req,res)=>{
    try {
        const {ordname,ordquantity,price,payment} = req.body
        const ordedit = await OrderSchema.findByIdAndUpdate(req.params._id,{ordname,ordquantity,price,payment},{new:true})
        if(!ordedit){
            res.status(400).json('Order is not Found')
        }
        res.status(201).json("Successfully Order is Update")
    } catch (error) {
        res.status(500).json({error:error.mesage})
    }
}
//OrderDelete
const Orderdelete = async(req,res)=>{
    try {
        const orddelete = await OrderSchema.findByIdAndDelete(req.params._id)
        if(!orddelete){
            res.status(400).json('Order IS not Found')
        }
        res.status(200).json('Order is Deleted Successfully')
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = {Ordercreate,AllOrderget,Ordergetbyid,Orderupdate,Orderdelete}