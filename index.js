import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

import {getApiHealth} from './controller/health.js';
import { postApiBookings,getApiBooking , getApiBookingsId, putApiBookings ,patchApiBookings, deleteApiBookings} from './controller/bookings.js';
import {postApiBuses,postApiSeatBook} from './controller/buses.js'


const app = express();
 app.use (express.json());

 const connectDB = async()=>{
const conn =  await mongoose.connect(process.env.MONGO_URI);

if(conn){
  console.log('mongoDB connected');
}
 }
 connectDB();

 app.get('/api/health',getApiHealth)

 app.post('/api/bookings', postApiBookings)

 app.get('/api/bookings', getApiBooking)

 app.get('/api/bookings/:id', getApiBookingsId )

 app.put('/api/bookings/:id',putApiBookings)

 app.patch('/api/bookings/:id',patchApiBookings)

 app.delete('/api/bookings/:id', deleteApiBookings)
 
 app.post('/api/v1/buses',postApiBuses)

 app.post('/api/v2/buses', postApiSeatBook)
 const PORT = process.env.PORT || 5000;
 app.listen (PORT , ()=>{
  console.log(`server is Running on PORT ${PORT}`);
 })


