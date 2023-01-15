const mongoose=require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  name:{
    type:String,
    required:true
    
  },
  email:{
    type:String,
    required:true
    
  },
  password:{
    type:String,
    required:true
    
  },
  role:{
    type:String,
    default:"User"
  },
  date:{
    type:Date,
    default: Date.now()
  }

  
},{timestamps:true});


const User_Model=new mongoose.model("User",blogSchema);


module.exports=User_Model;