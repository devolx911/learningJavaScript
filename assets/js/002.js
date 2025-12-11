// selectors
const showCart = document.getElementById("show-cart")
const addTocart = document.getElementById("add-to-cart")
const double = document.getElementById("double-add")
const tripple = document.getElementById("tripple-add")
const resetCart = document.getElementById("reset-cart")

let cart = 0;

// add eventListener
showCart.addEventListener("click", function(){
    console.log(`Cart quantity ${cart}`);
})

addTocart.addEventListener("click", function(){
    cart ++;
    console.log(`Cart quantity ${cart}`);
})
double.addEventListener("click", function(){
    cart +=2;
    console.log(`Cart quantity ${cart}`);
})
tripple.addEventListener("click", function(){
    cart +=3;
    console.log(`Cart quantity ${cart}`);
})
resetCart.addEventListener("click", function(){
    cart = 0;
    console.log(`Cart quantity ${cart}`);
})