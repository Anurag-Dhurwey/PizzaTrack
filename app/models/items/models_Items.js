const mongoose=require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  name:{
    type:String
    
  },
  price:{
    type:Number
    
  },
  size:{
    type:String
    
  }
  
});


const ItemModel=new mongoose.model("item",blogSchema);


module.exports=ItemModel;