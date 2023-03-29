const express=require('express')
const dotenv=require('dotenv').config()
const colors=require('colors')
const cors = require('cors')
const connectDb = require('./config/db')
const multer = require('multer')
const ImageModel=require('./model/review.model')
const productReview=require('./route/review.route')


const port=process.env.PORT || 8000
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
connectDb()

//storage
// const Storage=multer.diskStorage({
//     destination:'uploads',
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     },
// })

// const upload=multer({
//     storage:Storage
// }).single('testImg')


app.use('/uploads',express.static('uploads'))


app.use('/api/prodReview',productReview)
// app.post('/upload',(req,res)=>{
//     upload(req,res,(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             const newImg=new ImageModel({
//                 image:{
//                     data:req.file.filename,
//                     contentType:'image/png'
//                 }

//             })
//             newImg.save()
//             .then(()=>res.send('succesfully upload'))
//             .catch((err)=>console.log(err))
//         }
//     })

// })





app.listen(port,()=>console.log(`server is running  on port ${port}`.yellow.underline))