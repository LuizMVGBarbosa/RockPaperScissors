
function getComputerChoice(){
    return choice[ Math.floor(Math.random() * [choice.length])] ;
};


function playRound(playerSelection,computerSelection){ 
    playerSelection=playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
 if(playerSelection=="rock"){
    switch(computerSelection){
        case "Paper":
        return "You lose! Paper beats rock!"
        break;
        case "Scissors":
        return "You win! Rock beats Scissors!"
        break;default:
        return "Draw!"
    }}
    if(playerSelection=="paper"){
        switch(computerSelection){
            case "Scissors":
            return "You lose! Scissors beats Paper!"
            break;
            case "Rock":
            return "You win! Paper beats Rock!"
            break;
            default:
                    return "Draw!"
        }}
        if(playerSelection=="scissors"){
            switch(computerSelection){
                case "Rock":
                return "You lose! Rock beats Scissors!"
                break;
                case "Paper":
                return "You win! Scissors beats Paper!"
                break;
                default:
                    return "Draw!"
            }}
};


function game(){
    let score=playRound(playerSelection,computerSelection)
    switch(score){
        case "You win! Rock beats Scissors!":
         hScore++ 
         results.style.backgroundColor='green'
         break;
         case "You win! Paper beats Rock!":
         hScore++ 
         results.style.backgroundColor='green'
         break;
         case "You win! Scissors beats Paper!":
         hScore++ 
         results.style.backgroundColor='green'
         break;
         case "You lose! Paper beats rock!":
         pcScore++
         results.style.backgroundColor='red'
         break;
         case "You lose! Scissors beats Paper!":
         pcScore++
         results.style.backgroundColor='red'
         break;
         case "You lose! Rock beats Scissors!":
         pcScore++
         results.style.backgroundColor='red'
         break;
         default:
           tie++
           results.style.backgroundColor='yellow'
           break;
      }
    round++;
    results.textContent=score ;
    if(round==5&pcScore<hScore){
     finalresult.textContent="You won!Congratulations!!!" 
     finalresult.style.backgroundColor='green'
     results.textContent=":)"
     results.style.backgroundColor='green'}
    if(round==5&hScore<pcScore){
     finalresult.textContent="You lose!PC RULES!!!" 
     finalresult.style.backgroundColor='red'
     results.textContent=":("
     results.style.backgroundColor='red'}
    if(round==5&pcScore==hScore){
     finalresult.textContent="Draw Game!!!" 
     finalresult.style.backgroundColor='yellow'
     results.textContent=";|"
     results.style.backgroundColor='yellow' }
};



function start(){
      playerSelection = document.getElementById("Pchoice").value;
     game();
     hud.textContent= "  Wins: "+ hScore + "   Losses: "  +pcScore +  "    Ties:" + tie;
     };


const choice = ["Rock","Paper","Scissors"];
let round=0
let playerSelection;
let computerSelection;
let hScore=0;
let pcScore=0;
let tie=0
let results = document.querySelector('.result')
let hud= document.querySelector('.hud')
let finalresult= document.querySelector('.finalresult')
