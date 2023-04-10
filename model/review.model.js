const mongoose=require('mongoose')


const ImageSchema=mongoose.Schema({
    prodId:{
        type:String

    },
    username:{
        type:String,
       
    },
    review:{
        type:String,
        required:true
    },
    image:{
        
       type:String
    }
})

module.exports=mongoose.model('ImageModel',ImageSchema)
// const StudentData = mongoose.model('Student',schema);