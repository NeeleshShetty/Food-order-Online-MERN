import express, { Request, Response } from "express"
import cors from "cors"
import 'dotenv/config'
import mongoose from "mongoose"
import myUserRoute from './routes/MyUserRoutes'
import myRestaurantRoute from './routes/MyRestaurantRoutes'
import restaurantRoute from './routes/RestaurantRoute'
import orderRoute from './routes/OrderRoutes'
import {v2 as cloudinary} from 'cloudinary'

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("Connected to Database"))
.catch((err)=>console.log("Error in connecting the database"))

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})


const app = express()
app.use(express.json())
app.use(cors())


app.use('/api/my/user',myUserRoute)
app.use('/api/my/restaurant',myRestaurantRoute)
app.use('/api/restaurant',restaurantRoute)
app.use('/api/order',orderRoute)

app.listen(7000,()=>{
    console.log("Server started on localhost:7000")
})