const mongoose=require('mongoose')
const semesterSchema= new mongoose.Schema({
    semester:{
        type:Number
    },
    })
const semester=mongoose.model('semester',semesterSchema)
module .exports=semester                                                                                                                                         