import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


dotenv.config()

//Connect with MongoDB
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log(err.message)    
});



const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan("dev"))

//routes 
app.get("/",(req,res)=>{
    res.send("Hey deneme yazısı")
})

//Create Port 
const PORT = process.env.PORT || 5000;

//Listen
app.listen(PORT,()=>{
    console.log(`Serve at runing on the port localhost:${PORT}`);
})