const Admin=require("../models/adminSchema")
exports.createAdmin=async(req,res)=>{
    try{
        const admindata=new Admin(req.body)
        const saveData=await admindata.save()
        res.send(saveData)
    }
    catch(error)
    {
        res.send(error)
    }
}
exports.loginAdmin=async(req,res)=>{
    try{
        const{fullname,password}=req.body
        const adminData=await Admin.findOne({fullname,fullname})
        if(adminData)
            {
            if(adminData.password==password)
                {
                res.json("success")
            }
            
            else{
                res.json("wrong password")
            }
        }
            else{
                res.json("no record existed")
            }
         }
    catch(error){
    res.send(error)
    }
}