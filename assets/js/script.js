// youtube subscribe button

// selectors
const subBtn = document.getElementById("sub-btn");


// addevent listener
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
    let price = inputEl.value;
    price = Number(price);
    let shipping = 10;
    if(price < 40){
        price +=shipping
    }else{
        price
    }
    amazonResult.textContent = `$${price}`;  
})