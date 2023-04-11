

const multer = require('multer')
const path = require('path')
const ImageModel = require('../model/review.model')
//storage
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },

    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

// const upload = multer({
//     storage: Storage
// }).single('testImg')
// const upload = multer()
// const upload2 =upload.none()

const upload = multer({ storage: Storage })

const cpUpload = upload.fields([{ name: 'testImg' }])

exports.reviewUpload = async (req, res) => {

    // upload(req, res, (err) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     else {
    //         console.log(req.body)
    //         console.log(req.file)

    //         const newImg = new ImageModel({
    //             prodId: req.body.prodId,
    //             username: req.body.username,
    //             review: req.body.review,

    //             image: req.file.path
    //             // contentType:'image/png'


    //         })
    //         console.log(newImg)
    //         newImg.save()
    //             .then(() => res.status(200).json(newImg))
    //             .catch((err) => console.log(err))
    //     }
    // })



    // upload2(req, res,(err)=>{
    //     // req.body contains the text fields
    //     console.log(req.body)
    //         // console.log(req.file)
    //         if(err){
    //             console.log(err)
    //         }

    //         else{
    //             const newImg = new ImageModel({
    //                 prodId: req.body.prodId,
    //                 username: req.body.username,
    //                 review: req.body.review,

    //                 // image: req.file.path
    //                 // contentType:'image/png'


    //             })
    //             console.log(newImg)
    //             newImg.save()
    //                 .then(() => res.status(200).json(newImg))
    //                 .catch((err) => console.log(err))

    //         }


    //   })

    cpUpload(req, res, (err) => {
        if (err) {
            console.log(err)
        }

        else{
            if(req.files.image){
                for(let item of req.files.image){
                    mainitem+=`/${item.path}`
                }
            }

            res.send(`${mainitem}`)
            mainitem='';
        }

    })






}


//get review


exports.getReview = async (req, res) => {
    const prodId = req.query.prodId;
    try {
        ImageModel.find({ prodId })
            .then(data => res.json(data))
            .catch(err => {
                res.status(408).json({ err })
            })

    } catch (error) {
        res.json({ error })

    }
}