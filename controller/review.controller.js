

const multer = require('multer')
const path=require('path')
const ImageModel=require('../model/review.model')
//storage
const Storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },

    filename:(req,file,cb)=>{
        console.log(file)
        cb(null,Date.now()+ path.extname(file.originalname))
    }
})

const upload=multer({
    storage:Storage
}).single('testImg')

exports.reviewUpload=async(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(req.file)
            const newImg=new ImageModel({
                prodId:req.body.prodId,
                username:req.body.username,
                revie:req.body.review,
                
                image: req.file.path
                    // contentType:'image/png'
                

            })
            newImg.save()
            .then(()=>res.status(200).json(newImg))
            .catch((err)=>console.log(err))
        }
    })

}


//get review


exports.getReview=async(req,res)=>{
    try {
        ImageModel.find({})
        .then(data=>res.json(data))
        .catch(err=>{
            res.status(408).json({err})
        })
        
    } catch (error) {
        res.json({error})
        
    }
}