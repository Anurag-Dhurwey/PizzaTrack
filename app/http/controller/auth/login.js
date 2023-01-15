const login=(req, res) => {
    res.render("auth/login")
  };
const postLogin=(req, res) => {
    res.send("auth/login")
  };


  module.exports={login,postLogin};