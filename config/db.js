
const mongoose=require('mongoose')

const connectDb=async()=>{
    try {
        const conn=await mongoose.connect(process.env.DATABASE)
        console.log(`Mongodb connected:${conn.connection.host}`.blue.underline);
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }

}

module.exports=connectDb