const session=require("../models/sessionschema")
exports.createSession=async(req,res)=>{
    try{
        const sessiondata=new session(req.body)
        const saveData=await sessiondata.save()
        res.send(saveData)
    
    }
    catch(error)
    {
        res.send(error)
    }
}
exports.getsession=async(req,res)=>{
    try{
        const getData= await session.find({})
        res.send(getData)
    } 
    catch(error){
        res.send(error)
    }
}