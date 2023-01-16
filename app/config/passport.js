const localStrategy=require("passport-local").Strategy;
const User_Model=require("../models/auth/models_Register");
const bcrypt=require("bcrypt");

const init= async(passport)=>{

   
   

   passport.use(new localStrategy({usernameField:'email'},async(email,password,done)=>{
            // login algo
        const User=await User_Model.findOne({email:email});
        if( !User){
            return done(null,false,{message:"No user found"});
        };
        
        
       try {
        const match=await bcrypt.compare(password,User.password);
            if(match){
                return done(null,User,{message:"login successfully"});
            }
            return done(null,false,{message:"wrong password"});
            
       } catch (error) {
        return done(null,false,{message:"something went wrong"});
       }
   

   }))


   passport.serializeUser((User,done)=>{
       done(null,User._id)
    
})

passport.deserializeUser((id,done)=>{
    User_Model.findById(id,(err,user)=>{
       done(err,user)
   })
})
  
};

module.exports=init;