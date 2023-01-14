require("dotenv").config();
const express = require('express');
const router=require("./app/http/routes/router");
const connect_DB=require("./app/config/mongoose");
const EJSLayout = require('express-ejs-layouts');
const ejs=require("ejs");
const path=require("path");
const app = express();
const port = process.env.PORT;

                   // static file and path setup 
const static_file_path=path.join(__dirname,"./public/");                  
app.use(express.static(static_file_path));                   
                   // template engine setup 
const template_path=path.join(__dirname,"./resources/templates/views/");                   
app.set("view engine","ejs");
app.set("views",template_path);
                // partials files and path setup 
app.use(EJSLayout);
                  // router setup 
app.use("/",router)


const express_js=async()=>{
    connect_DB(process.env.URL_to_DB)
    app.listen(port, () => {
        console.log(`Example app listening on http://localhost:${port}`)
      });
      
};

express_js();