const auth=(req,res,next)=>{
    console.log(req.isAuthenticated())
    if(req.isAuthenticated()){
       return next();
    }else{
        return res.redirect('/login');
    };

}


module.exports=auth