const registration = require('../models/registrationSchema')
exports.createreg = async(req,res)=>{
    try{
        const regData= new registration(req.body)
        const saveData= await regData.save()
        res.send(saveData)
    }
    catch(error){
        res.send(error)
    }
}

exports.getReg=async(req,res)=>{
    try{
        const getData=await registration.find({})
        res.send(getData)
    }catch(error)
    {
        res.send(error)
    }
}
exports.getregId=async(req,res)=>{
    try{
        const id= req.params.id
        const getregID=await registration.findById({_id:id})
        res.send(getregID)

    }  
    catch(error)
    {
        res.send(error)
    }

    }
    exports.updateData= async(req,res)=>{
        try{
            const id=req.params.id
            const update=await registration.findByIdAndUpdate({_id:id},req.body,{new:true})
            res.send(update)
        }catch(error){
            res.send(error)
        }
    }
    exports.deleteregistration=async(req,res)=>{
        try{
            const id=req.params.id
            const registrationData=await registration.findByIdAndDelete({_id:id})
                res.send(registrationData)
             }
             catch(error)
             {
                res.send(error)
            }
        }
        
