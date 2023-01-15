import  Axios  from "axios";
const addToCart = document.querySelectorAll(".Add-to-cart");
const cart_counter=document.querySelector("#cart-counter");

const updateCart = (itemIs) => {
  Axios.post("/update-cart", itemIs).then((res)=>{
  console.log(res)
  cart_counter.innerText=res.data.totalQty;
  });
};

addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let itemIs = JSON.parse(btn.dataset.item);
    // console.log(itemIs);
    updateCart(itemIs);
  });
});
