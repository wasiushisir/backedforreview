const express=require('express')
const { reviewUpload, getReview } = require('../controller/review.controller')
const router=express.Router()



router
.post('/',reviewUpload)
.get('/',getReview)

module.exports=router