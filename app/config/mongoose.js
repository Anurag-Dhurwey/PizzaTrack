const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
const connect_DB=async(URL_to_DB)=>{
   await mongoose.connect(URL_to_DB);
    console.log("connected to mongoose")
}


module.exports=connect_DB;