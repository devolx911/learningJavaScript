/*
const product = {
    name: "rice",
    pirce: 1000,
    available: true
}
console.log(`Product name is ${product.name}`);
console.log(`Product ${product.name} available ${product.available}`);
localStorage.setItem("data", JSON.stringify(product))
console.log(JSON.parse(localStorage.getItem("data")));
*/

// exerices
/*
const basket = {
    product: "Basketball",
    price: 2095
}
console.log(basket);

let increasePrice = basket.price;
increasePrice += 500;
console.log(increasePrice);

basket.deliveryDate = "3 Days";

console.log(basket);
*/

// exercies
const product1 = {
    name: "Apple",
    price: 80
}

const product2 = {
    name: "Banana",
    price: 90
}

function comparePrice(value1,value2){
    if(value1.price < value2.price){
        return value1.name;
    }
    else{
        return value2.name;
    }
}
console.log(comparePrice(product1,product2));



