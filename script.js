
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
         break;
         case "You win! Paper beats Rock!":
         hScore++
         break;
         case "You win! Scissors beats Paper!":
         hScore++
         break;
         case "You lose! Paper beats rock!":
         pcScore++
         break;
         case "You lose! Scissors beats Paper!":
         pcScore++
         break;
         case "You lose! Rock beats Scissors!":
         pcScore++
         break;
         default:
           tie++
           break;
      }
    round++;
    alert(score);
    if(round==5&pcScore<hScore){ alert("You won!Congratulations!!!")}
    if(round==5&hScore<pcScore){   alert("You lose!PC RULES!!!")}
    if(round==5&pcScore==hScore){alert("Draw Game!!!")}
}



function start(){
      playerSelection = document.getElementById("Pchoice").value;
     game()
     }


const choice = ["Rock","Paper","Scissors"];
let round=0
let playerSelection;
let computerSelection;
let hScore=0;
let pcScore=0;
let tie=0
