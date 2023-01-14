const router= require("express").Router()
const homePage=require("../controller/homePage")
const update_cart = require("../controller/update-cart")


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

router.post('/update-cart',update_cart)



  module.exports=router;