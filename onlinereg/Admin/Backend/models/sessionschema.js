const mongoose=require('mongoose')
const sessionSchema= new mongoose.Schema({
    session:{
        type:Number
    },
    })
const session=mongoose.model('session',sessionSchema)
module .exports=session                                                                                                                                          