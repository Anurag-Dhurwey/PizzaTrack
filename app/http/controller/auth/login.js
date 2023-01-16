const passport = require("passport");

const login=(req, res) => {
    res.render("auth/login")
  };
const postLogin=(req, res,next) => {
    passport.authenticate("local",(err,user,info)=>{
        if(err){
          req.flash("error",info.message);
          return next();
        }
        if(!user){
          req.flash("error",info.message);
          return res.redirect("/login");
        }
        req.login(user,(err)=>{
           if(err){
            req.flash("error",info.message);
            return next();
           }
           return res.redirect("/")
        })
    })(req,res,next)

  };


  module.exports={login,postLogin};