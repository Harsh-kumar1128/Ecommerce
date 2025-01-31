const { default: mongoose } = require('mongoose')
const EmpModel = require('../Model/Employeemodel')

const Empcreate = async(req,res)=>{
    try {
        const {name,email,password} = req.body
        const empemail = await EmpModel.findOne({email})
        if(empemail){
            return res.status(401).json('Email is Already Exist')
        }
        const empcrt = new EmpModel(req.body) 
        await empcrt.save()
        res.status(201).json('Employee Created Successfully')
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const Allempget = async (req,res)=>{
    try {
        const getemp = await EmpModel.find(req.body)
        res.status(200).json(getemp)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const Empgetid = async(req,res)=>{
    try {
        const empid = await EmpModel.findById(req.params._id)
       if(!empid){
        res.status(400).json("Employee IS Not Found")
       }
       res.status(200).json(empid)
    } catch (error) {
       res.status(500).json({error:error.message}) 
    }
}

const Empupdate = async(req,res)=>{
    try {
        const {name,email,password} = req.body
        
        const empedit = await EmpModel.findByIdAndUpdate(req.params._id,{name,email,password},{new:true})
        if(!empedit){
            res.status(400).json('Employee Not Found')
        }
             res.status(200).json(empedit)   
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const Empdelete = async(req,res)=>{
    try {
        const empdelete = await EmpModel.findByIdAndDelete(req.params._id)
        if(!empdelete){
            res.status(400).json('Employee is not Found')
        }
        res.status(200).json('Employee Deleted Successfully')
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const Emplogin = async(req,res)=>{
    try {
      

        const {email,password} = req.body
        const empemail = await EmpModel.findOne({email})
        if(!empemail){
            res.status(400).json('Wrong Email password')
        }
        if(empemail.password !== password){
            res.status(400).json('Wrong Email password')
        }
        res.status(200).json('Successfully Login')
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {Empcreate,Allempget,Empgetid,Empupdate,Empdelete,Emplogin}