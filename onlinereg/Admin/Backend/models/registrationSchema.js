const mongoose=require('mongoose')
const registrationSchema=new mongoose.Schema({
    regno:{
       type:Number
    },
   fullname:{
    type:String
   },
   password:{
    type:String
   },
   course:
   {
    type:String
   },
   department:{
    type:String
   },
   session:{
    type:Number
   },
   semester:{
      type:Number
   },
})
const registration=mongoose.model('registration',registrationSchema)
module.exports=registration