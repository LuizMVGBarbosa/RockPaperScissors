const choice = ["Rock","Paper","Scissors"];
function getComputerChoice(){
    return choice[ Math.floor(Math.random() * [choice.length])] ;
};
function playRound(playerSelection,computerSelection){ 
 if(playerSelection="rock"){
    switch(computerSelection){
        case "Paper":
        return "You lose! Paper beats rock!"
        break;
        case "Scissors":
        return "You win! Rock beats Scissors!"
        break;
        default:
            return "Draw!"
    }}
    if(playerSelection="paper"){
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
        if(playerSelection="scissors"){
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
const playerSelection = "rock";
const computerSelection = getComputerChoice();

