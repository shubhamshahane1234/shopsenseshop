const mongoose = require('mongoose');
const OrderSchema =  new mongoose.Schema({
   UserId:{type:String,required:true},
   Products: [
    {productId:{type:String},quantity:{type:Number,default:1}}
   ],
   address:{type:String,required:true},
  amount:{type:Number,required:true},
  status:{type:String,default:'pending',required:1}
  },{timestamps:true});
  mongoose.models = {}
  export default mongoose.model("Order",OrderSchema)
