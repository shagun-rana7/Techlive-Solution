const courses= require('../models/coursesSchema')

exports.createcourses=async(req,res)=>{
    try{
        const coursesData=new courses(req.body)
        const saveData=await coursesData.save()
        res.send(saveData)

    }
    catch(error)
    {
     res.send(error)
    }
}
exports.courseget=async(req,res)=>{
    try{
        const getData =await courses.find({})
        res.send(getData)
    }
    catch(error)
    {
        res.send(error)
    }
}
       exports.getcoursesId=async(req,res)=>{
        try{
            const id=req.params.id
            const getcourses=await courses.findById({_id:id})
            res.send(getcourses)
        }
        catch(error){
            res.send(error)
        }
    }
    exports.updatecourses=async(req,res)=>{
        try{
            const id=req.params.id
            const updateData=await courses.findByIdAndUpdate({_id:id},req.body,{new:true})
            res.send(updateData)
        }
        catch(error)
    {
        res.send(error)
    }
}
exports.deletecourses=async(req,res)=>{
    try{
        const id=req.params.id
        const deleteData=await courses.findByIdAndDelete({_id:id})
            res.send(deleteData)
         }
         catch(error)
         {
            res.send(error)
        }
    }
    
    