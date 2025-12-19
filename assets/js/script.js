// youtube subscribe button

// selectors
const subBtn = document.getElementById("sub-btn");


// addevent listener

/*
    check if the subscribe button as the 
    value Subscribe if it does when the button
    is click it will change the text content and 
    add some css style 
*/
subBtn.addEventListener("click", function(){
    if(subBtn.innerText === "Subscribe"){
        subBtn.classList.add("subscribed-active")
        subBtn.innerHTML = "Subscribed";
        
    }else{
        subBtn.classList.remove("subscribed-active")
        subBtn.innerHTML = "Subscribe";
        
    }
})



// paper rock scissors

// selectors
const buttons = document.querySelectorAll(".button")
const scoreBoard = document.getElementById("score-board")
const moves = document.getElementById("moves")
const resultMessage = document.getElementById("resultMessage")


// variables
let choice;
let computerChoice;
let userChoice;
let generateResult;
let message;
let score = {
    win: 0,
    lose: 0,
    tie: 0
};

// add eventlistener
buttons.forEach(button => button.addEventListener("click",(e)=>{
    choice = e.target.id;
    // check for the particular button the user choose
    if(choice === "paper"){
        userChoice = choice;   
    }
    else if(choice === "scissor"){
        userChoice = choice; 
    }else{
        userChoice = choice; 
    }
    generateComputerChoice()
    checkResult()
}))

// generate a random computer choice 
let generateComputerChoice = ()=>{
    generateResult = Math.floor(Math.random()*buttons.length)+1;

    if(generateResult === 1){
        computerChoice = "paper"
    }
    else if(generateResult === 2){
        computerChoice = "rock"
    }else{
        computerChoice = "scissor"
    }
}

// compera the user choice with the random computer choice
let checkResult = ()=>{
    if(computerChoice === userChoice){
        message = "Draw";
        score.tie ++;

    }else if(computerChoice === "paper"&& userChoice === "scissor"){
        message = "You Won"
        score.win ++;

    }else if(computerChoice === "paper" && userChoice === "rock"){
        message = "You Lost"
        score.lose ++;
    }else if(computerChoice === "scissor"&& userChoice === "rock"){
        message = "You Won"
        score.win ++;

    }else if(computerChoice === "scissor" && userChoice === "paper"){
        message = "You Lost"
        score.lose ++;
        
    }else if(computerChoice === "rock" && userChoice === "paper"){
        message = "You won"
        score.win ++;
        
    }else if(computerChoice === "rock" && userChoice === "scissor"){
        message = "You Lost"
        score.lose ++;
        
    }    
    resultMessage.textContent = message;
    moves.textContent = `Player: ${userChoice} - Comupter: ${computerChoice}`;
    scoreBoard.textContent = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

// amazon shipping calculator

// selectors
const inputEl = document.getElementById("input-value");
const amazonButtonEl = document.getElementById("amazon-button");
const amazonResult = document.getElementById("amazon-result");

// add evetlistener
amazonButtonEl.addEventListener("click", ()=>{
    calcaulate()
})

let keyControl = (event)=>{
    if(event.key === 'Enter'){
        calcaulate()
    }
}

/*
    check if the user input in greater 
    than 40 the shipping fee will
    be free else  a shipping cost of $10 
    will be added to the product
 */
let calcaulate = ()=>{
    let price = inputEl.value;
    price = Number(price);
    let shipping = 10;
    if(price < 40){
        price +=shipping
    }
    amazonResult.textContent = `$${price}`;  
}


// head and tail

// selectors
const headTailBtn = document.querySelectorAll(".head-tail-btn");
const htbText = document.getElementById("htb-text");
let htBChoice;
let htbMessage;
// add eventlistener
headTailBtn.forEach(htBtn => htBtn.addEventListener("click", (e)=>{
    htBChoice = e.target.id;

    htBLogic()
}))

/* check if the button as an 
    id of head or tail to
    run the fuction and display
    the user choice on the screen
*/
let htBLogic = ()=>{
    if(htBChoice === "head"){
        htbMessage = htBChoice;
    }else{
        htbMessage = htBChoice;
    }
    htbText.textContent = `You chose ${htbMessage}`;
}


// pop up

// selectors
const openPopUp = document.getElementById("open-popup-btn");
const closePopUp = document.getElementById("close-popup-btn");
const popUpBox = document.querySelector(".popup-box");


// add eventlistener

/* this fuction open the popbox by 
    adding the css classlist to the popbox 
*/
openPopUp.addEventListener("click", ()=>{
    popUpBox.classList.add("active-popup-Box")
})

/* this fuction close the popbox by 
    removing the css classlist on the popbox
*/
closePopUp.addEventListener("click", ()=>{
    popUpBox.classList.remove("active-popup-Box");
})

// on and of buttons
const onOfButtons = document.querySelectorAll(".control-btn");

let clickedOnOfButton;
// add eventlistener
onOfButtons.forEach(onOfButton => onOfButton.addEventListener("click", (e)=>{
    clickedOnOfButton = e.target;
    on()
    
}))

let on = ()=>{
    if(clickedOnOfButton.id === "gaming"){
        clickedOnOfButton.classList.add("on-of")

    }else if(clickedOnOfButton.id === "music"){
        clickedOnOfButton.classList.add("on-of")

    }else{
        clickedOnOfButton.classList.add("on-of")
    }
}

// todo

// selectors
const toDoBtn = document.getElementById("toDoBtn");
const toDoInputEl = document.getElementById("toDoInput");
const toDoDateEl = document.getElementById("toDoDate");
const toDOListEl = document.getElementById("toDOList");
const emptyTodoBtn = document.getElementById("empty-todo-btn");
const emptyTodoBox = document.getElementById("empty-todo");


let toDoDate = "";
let toDoInput = "";

// add eventlistener 


// dummy todo data to be display when the site load
let toDoArry = [
    {
        toDoInput: "Watch Youtube",
        toDoDate: "2025-12-05"
    },
    {
        toDoInput: "Code Youtube",
        toDoDate: "2025-12-22"
    }
];


/*
    this button function is to remove
    the message that display when the 
    user enter a empty Todo
*/
emptyTodoBtn.addEventListener("click", ()=>{
    emptyTodoBox.classList.remove("empty-todo-active");
})


toDoBtn.addEventListener("click", ()=>{
    toDoInput = toDoInputEl.value;
    toDoDate = toDoDateEl.value;

    // check if the todo imput field is empty to display error message
    if(toDoInput === "" || toDoDate ===""){

        emptyTodoBox.classList.add("empty-todo-active")
        
    }else{
    // if the input and date field is not empty push new todo to the array and render to the screen
        toDoArry.push({
            toDoInput,
            toDoDate
        })
        
        toDoInputEl.value = "";
        toDoDateEl.value = "";

        renderTodo()
    }
    
})


//render the new todo to the screen
let renderTodo = ()=>{
    let todoHTML = "";
    for(let i = 0; i < toDoArry.length; i++){
        let todo = toDoArry[i];
        let {toDoInput,toDoDate} = todo;
        let html = 
        `<div>${toDoInput}</div>
        <div>${toDoDate}</div>
        <button id="deleteTodoBtn" onclick=deleteTodoBtn(${i})>Delete</button>
        `;
        todoHTML +=html;
    }
    toDOListEl.innerHTML = todoHTML;   
}
renderTodo()


// delete a particula todo when user clicks
let deleteTodoBtn = (i)=>{
    toDoArry.splice(i,1)
    renderTodo()
}
