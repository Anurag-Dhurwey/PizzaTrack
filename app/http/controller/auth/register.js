const User_Model=require("../../../models/auth/models_Register");
const items_model=require("../../../models/items/models_Items");

const register= (req, res) => {
    res.render("auth/register");
  };
const postRegister= async(req, res) => {
  try {
  
  const {name,email,password}=req.body;
  const items_modelData=await items_model.find();

  if(!name || !email || !password){
    req.flash("error","all fields are required");
    req.flash("name",name);
    req.flash("email",email);
    
    res.redirect("/register")
  };
 
  User_Model.exists({email:email},(err,result)=>{
    if(result){
      req.flash("error","email is already exists");
      req.flash("name",name);
      req.flash("email",email);
    
    res.redirect("/register")
    }
  })

  if(name && email && password){
    // password hassing algo using bcrypt
  const bcrypt=require("bcrypt");
  const hassedPassword=await bcrypt.hash(password,10);

  const user_Data=await new User_Model({
    name:name,
    email:email,
    password:hassedPassword
  });
  const Cloud_User=await user_Data.save();

  res.render("index",{
    model:items_modelData
  })
  }
  

} catch (error) {
  console.log(`${error} postRegister error`);
  res.send("Some thing went wrong")
}
   
    
  };


  module.exports={register,postRegister}