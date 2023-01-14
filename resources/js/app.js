import  Axios  from "axios";
const addToCart = document.querySelectorAll(".Add-to-cart");

const updateCart = (itemIs) => {
  Axios.post("/update-cart", itemIs).then((res)=>{
  console.log(res)
  });
};

addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let itemIs = JSON.parse(btn.dataset.item);
    // console.log(itemIs);
    updateCart(itemIs);
  });
});
