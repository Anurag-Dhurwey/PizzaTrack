const router= require("express").Router();
const cartPage = require("../controller/cart/cartPage");
const homePage=require("../controller/homePage");
const update_cart = require("../controller/cart/update-cart");
const {register,postRegister} = require("../controller/auth/register");
const { login, postLogin } = require("../controller/auth/login");


router.get('/',homePage );
               // when user will regiter over selves
router.get('/register',register);
router.post('/register',postRegister);
                 // when user will login 
router.get('/login',login );
router.post('/login',postLogin );
                // cart section of user 
router.get('/cart',cartPage);

router.post('/update-cart',update_cart);



  module.exports=router;