const express = require('express')
const orderroute = express.Router()
const OrderController = require('../Controller/Ordercontroller')


orderroute.post('/ordcreate',OrderController.Ordercreate)
orderroute.get('/allord',OrderController.AllOrderget)
orderroute.get('/orderid/:_id',OrderController.Ordergetbyid)
orderroute.put('/orderedit/:_id',OrderController.Orderupdate)
orderroute.delete('/orddelete/:_id',OrderController.Orderdelete)
module.exports = orderroute