const mongoose=require("mongoose");
mongoose.set('strictQuery', false);


const connect_DB=async(URL_to_DB)=>{
   try {
    await mongoose.connect(URL_to_DB);
    console.log("connected to mongoose")
   } catch (error) {
    console.log(`${error} mongoose disconnected`)
   }
}


module.exports=connect_DB;