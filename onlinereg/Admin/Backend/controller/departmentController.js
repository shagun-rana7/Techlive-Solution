const department = require("../models/departmentSchema")
exports.createdepartment=async(req,res)=>{
    try{
        const departmentdata=new department(req.body)
        const saveData=await departmentdata.save()
        res.send(saveData)
    
    }
    catch(error)
    {
        res.send(error)
    }
}
exports.getdepartment=async(req,res)=>{
    try{
        const getData=await department.find({})
        res.send(getData)
    }catch(error)
    {
        res.send(error)
    }
}

exports.getdepartmentId=async(req,res)=>{
    try{
        const id= req.params.id
        const getdeparID=await department.findById({_id:id})
        res.send(getdeparID)

    }
    catch(error)
    {
        res.send(error)
    }

    }
exports.updatedepartment=async(req,res)=>{
        try{
            const id=req.params.id
            const updateData=await department.findByIdAndUpdate({_id:id},req.body,{new:true})
            res.send(updateData)
        }
        catch(error)
    {
        res.send(error)
    }
}
exports.deletedepartment=async(req,res)=>{
    try{
        const id=req.params.id
        const deleteData=await department.findByIdAndDelete({_id:id})
            res.send(deleteData)
         }
         catch(error)
         {
            res.send(error)
        }
        
    
}
    