const choice = ["Rock","Paper","Scissors"];
function getComputerChoice(){
    return choice[ Math.floor(Math.random() * [choice.length])] ;
};
function playRound(playerSelection,computerSelection){ 
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
    playRound(playerSelection,computerSelection)
    if (score=="You win! Rock beats Scissors!"||score=="You win! Paper beats Rock!"||score=="You win! Scissors beats Paper!"){
        hscore++ 
    };
    if(score=="You lose! Paper beats rock!"||score=="You lose! Scissors beats Paper!"||score=="You lose! Rock beats Scissors!"){
        pcscore++ 
    } 
    round++;
    alert(score);
    if(round==5&pcscore<hscore){ alert("You won!Congratulations!!!")}
    if(round==5&hscore<pcscore){   alert("You lose!PC RULES!!!")}
    if(round==5&pcscore==hscore){alert("Draw Game!!!")}
}

function start(){
      playerSelection = document.getElementById("Pchoice").value;
     game()
     }
let round=0
let playerSelection;
let computerSelection;
let hscore=0;
let pcscore=0;

