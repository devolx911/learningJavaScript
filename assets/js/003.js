// selectors
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const displayResult = document.getElementById("result");
const winEL = document.getElementById("win");
const loseEL = document.getElementById("lose");
const tieEl = document.getElementById("tie");
const deleteBtn = document.getElementById("delete");
let userChoice;
let computerChoice;

let score = JSON.parse(localStorage.getItem("score"))

// player
rockBtn.addEventListener("click", function(){
    generateRandomNum()
    userChoice = "rock";
    user.textContent = userChoice.toUpperCase();
    result()

})
paperBtn.addEventListener("click", function(){
    generateRandomNum()
    userChoice = "paper";
    user.textContent = userChoice.toUpperCase();
    result()
})
scissorBtn.addEventListener("click", function(){
    generateRandomNum()
    userChoice = "scissor";
    user.textContent = userChoice.toUpperCase();
    result()
})



// add eventlistener
let min = 1;
let max = 3;
let randomNum;
function generateRandomNum(){
    randomNum = Math.floor(Math.random()*max+min)
    if(randomNum === 1){
       computerChoice = "rock";
    }
    else if(randomNum === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissor";
    }
    computer.textContent = computerChoice.toUpperCase();

}

let resultoutCome;

let result = ()=>{
    if(computerChoice === userChoice){
        resultoutCome = "it a draw";
        score.tie ++;
    }
    else if(computerChoice === "scissor" && userChoice === "paper"){
        resultoutCome = "You lose";
        score.lose ++;
    }
    else if(computerChoice === "rock" && userChoice === "paper"){
        resultoutCome = "You win";
        score.win ++;
    }
    else if(computerChoice === "scissor" && userChoice === "rock"){
        resultoutCome = "You win";
        score.win ++;
    }
    else if(computerChoice === "paper" && userChoice === "rock"){
        resultoutCome = "You lose";
        score.lose ++;
    }
    else if(computerChoice === "rock" && userChoice === "scissor"){
        resultoutCome = "You lose";
        score.lose ++;
    }
    else if(computerChoice === "paper" && userChoice === "scissor"){
        resultoutCome = "You win";
        score.win ++;
    }
    displayResult.textContent = resultoutCome;
    winEL.textContent = `Win: ${score.win}`;
    loseEL.textContent = `Lose: ${score.lose}`;
    tieEl.textContent = `Tie: ${score.tie}`;
    localStorage.setItem("score", JSON.stringify(score))
    
}

deleteBtn.addEventListener("click", ()=>{
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.setItem("data", JSON.stringify(score))
})




