import {Schema, model} from 'mongoose';

const bookingSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    charges:{
        type:Number,
        reuired:true
    },
    location:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const  Booking = model('Booking', bookingSchema);
export default Booking;