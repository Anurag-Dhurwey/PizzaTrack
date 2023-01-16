require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const router=require("./app/http/routes/router");
const connect_DB=require("./app/config/mongoose");
const EJSLayout = require('express-ejs-layouts');
const session=require("express-session");
const flash=require("express-flash");
const MongoStore=require("connect-mongo");
const path=require("path");
const passport=require("passport");

                   // static file and path setup 
const static_file_path=path.join(__dirname,"./public/");                  
app.use(express.static(static_file_path));

                   // template engine setup 
const template_path=path.join(__dirname,"./resources/templates/views/");                   
app.set("view engine","ejs");
app.set("views",template_path);
app.use(EJSLayout);  

                
                // express-session setup 
app.use(session({
  secret:process.env.SECRET_KEY,
  store:MongoStore.create({
    mongoUrl: process.env.URL_to_DB,
    collectionName:"Mysession"
  }),
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60*60 }
}))

                // login config using passport 
const passportInit=require("./app/config/passport");
passportInit(passport)
app.use(passport.initialize()) ;
app.use(passport.session()); 
        
            // Globel Middileware setup 
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(flash()); // express-flash setup 
app.use((req,res,next)=>{
    res.locals.session=req.session;
    res.locals.user=req.user;
    next()
})


                  // router setup 
app.use("/",router)








const express_js=async()=>{
    try {

      connect_DB(process.env.URL_to_DB)
    app.listen(port, () => {
        console.log(`Example app listening on http://localhost:${port}`)
      });
      
    } catch (error) {
      console.log(error+'express disconnected')
    }
};

express_js();