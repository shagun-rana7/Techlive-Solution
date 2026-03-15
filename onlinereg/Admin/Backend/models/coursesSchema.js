const mongoose= require('mongoose')
const coursesSchema= new mongoose.Schema({
    courses:{
        type:String
    }
    })
const courses=mongoose.model('courses',coursesSchema)
module .exports=courses                                                                                                                                        