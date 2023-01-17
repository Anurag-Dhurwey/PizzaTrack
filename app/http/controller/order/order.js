const Order_model=require('../../../models/order/order_model');

const order=async(req,res)=>{
    const orderData= await Order_model.find({UserID:req.user._id},null,{sort:{createdAt:-1}});
    // console.log(orderData)
    res.render('order',{
        orderData:orderData
    });
};

const postOrder=async(req,res)=>{
   const {mobile,address}=JSON.parse(JSON.stringify(req.body));
    console.log(mobile,address)
    try {
        if(!mobile||!address){
            req.flash('error','All details are required');
            res.redirect('/cart')
        }
        if(mobile && address){
            const order=await new Order_model({
                UserID:req.user._id,
                mobile:mobile,
                items:req.session.cart.items,
                address:address,
        
            })
        
            let orderData=await order.save();
            delete req.session.cart
            res.redirect('/orders')
        }

   } catch (error) {
    console.log(error)
    req.flash('error',"internal server error")
    return res.redirect('/cart')
   }
    
}

module.exports={order,postOrder}