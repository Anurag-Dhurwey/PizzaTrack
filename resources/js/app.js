import  Axios  from "axios";
import notie from 'notie';
const addToCart = document.querySelectorAll(".Add-to-cart");
const cart_counter=document.querySelector("#cart-counter");


const notifier=()=>{
  notie.alert({
    type:1, // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
    text: "Item is added to your cart",
    stay: false, // optional, default = false
    time: 1, // optional, default = 3, minimum = 1,
    position: "top" // optional, default = 'top', enum: ['top', 'bottom']
  })
}

const updateCart = (itemIs) => {
  Axios.post("/update-cart", itemIs).then((res)=>{
    notifier()
  cart_counter.innerText=res.data.totalQty;
  }).catch((error)=>{
    notie.alert({
      type:3, 
      text: "Internal server error",
      stay: false, 
      time: 1,
      position: "top"
    })
  });

  

};



addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let itemIs = JSON.parse(btn.dataset.item);
    updateCart(itemIs);
    console.log(itemIs)
  });
});



