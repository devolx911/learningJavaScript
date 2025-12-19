/*
let fruits = ["orang","apple","mango"];

console.log(fruits);

fruits.push(100)
console.log(fruits);

fruits.splice(0,2)
console.log(fruits);

let myArray = [1,"ola",true,{name: "olx",age: 21},[1,4,5]];
console.log(myArray[3].name);


let list = ["Make dinner","Wash dishes","watch Youtube"];

for(let i = 0; i < list.length; i++){
    console.log(list[i]);
   
}

const num = [1,1,3];
let total = 0;
for(let i = 0; i < num.length; i++){
    let value = num[i];
    total +=value;
    console.log(total);
    
}


*/

// toDo
// selectors
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");



let todos = [];

// add eventlistener
addTodoBtn.addEventListener("click", ()=>{
    let toDoValue = todoInput.value;
    todos.push(toDoValue);
    console.log(todos);
    todoInput.value = "";
})



// selectors
const todoInput2 = document.getElementById("todoInput2");
const addTodoBtn2 = document.getElementById("addTodoBtn2");
const outPutText = document.getElementById("outPutText");

let toDoLists = [];
addTodoBtn2.addEventListener("click", function(){
    let toDoHtml = "";
    toDoLists.push(todoInput2.value);
    for(let i = 0; i<toDoLists.length; i++){
        let toDo = toDoLists[i];
        let html = `<p>${toDo}</p>`;
        toDoHtml += html;
    }
    outPutText.innerHTML = toDoHtml;
    todoInput2.value = "";
})

