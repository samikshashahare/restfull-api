import {Schema, model} from 'mongoose';

const busesSchema = new Schema({
    busName:{
        type: String,
        required:true
    },
    busNum:{
        type:Number,
        required:true
    },
    seatNo:{
        type:Number,
        reuired:true
    },
    Seats:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    }
},{
    Timestamps:true
});

const Bus = model('Bus', busesSchema)
export default Bus;
