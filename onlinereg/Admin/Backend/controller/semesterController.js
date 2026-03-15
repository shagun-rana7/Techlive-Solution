const semester = require("../models/semesterSchema")
exports.createSemester=async(req,res)=>{
    try{
        const semesterdata=new semester(req.body)
        const saveData=await semesterdata.save()
        res.send(saveData)
    
    }
    catch(error)
    {
        res.send(error)
    }
}
exports.getsemester=async(req,res)=>{
    try{
        const getData= await semester.find({})
        res.send(getData)
    } 
    catch(error){
        res.send(error)
    }
}