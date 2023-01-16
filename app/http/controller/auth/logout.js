
const logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
             return err
        }
        return res.redirect("/login");
    });
};


module.exports=logout;