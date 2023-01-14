const router= require("express").Router()
const homePage=require("../controller/homePage")


router.get('/',homePage )

router.get('/register', (req, res) => {
    res.render("auth/register")
  })
router.get('/login', (req, res) => {
    res.render("auth/login")
  })
router.get('/cart', (req, res) => {
    res.render("cart")
  })



  module.exports=router;