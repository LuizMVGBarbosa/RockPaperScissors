
const choice = ["Rock","Paper","Scissors"];
function getComputerChoice(){
    return choice[ Math.floor(Math.random() * [choice.length])] ;
};

function playRound(playerSelection,computerSelection){ 
     computerSelection = getComputerChoice();
 if(playerSelection=="rock"){
    switch(computerSelection){
        case "Paper":
            Rchoice.children[1].classList.add('Rchoosed');  
        return "lose!"
        break;
        case "Scissors":
            Rchoice.children[2].classList.add('Rchoosed');
        return "win!"
        break;
        default:
            Rchoice.children[0].classList.add('Rchoosed');   
        return "Draw!"
    }}
    if(playerSelection=="paper"){
        switch(computerSelection){
            case "Scissors":
                Rchoice.children[2].classList.add('Rchoosed');
            return "lose!"
            break;
            case "Rock":
            Rchoice.children[0].classList.add('Rchoosed');         
            return "win!"
            break;
            default:
                Rchoice.children[1].classList.add('Rchoosed');
                    return "Draw!"
        }}
        if(playerSelection=="scissors"){
            switch(computerSelection){
                case "Rock":
                    Rchoice.children[0].classList.add('Rchoosed');    
                return "lose!"
                break;
                case "Paper":
                    Rchoice.children[1].classList.add('Rchoosed');
                return "win!"
                break;
                default:
                    Rchoice.children[2].classList.add('Rchoosed');
                    return "Draw!"
                }
};}


function game(playerSelection){
    let score=playRound(playerSelection,computerSelection)
    switch(score){
        case "win!":
         hScore++ 
         wins.textContent= `Wins:${hScore}`;
         guy.classList.add('winner');
         robot.classList.add('looser');
         playsound('.data2');
         break;
         case "lose!":
         pcScore++
         loses.textContent= `Loses:${pcScore}`;
         robot.classList.add('winner');
         guy.classList.add('looser');
         playsound('.data1');
         break;

         default:
           tie++
           robot.classList.add('tie');
           guy.classList.add('tie');
           draw.textContent= `Ties:${tie}`;
           playsound('.data3')
           break;
      }
    round++;
    rounds.textContent = `Rounds:${round}`
    if(round==5){
        endGame()
    }

};


let round=0
let rounds = document.querySelector('.rounds')

let hScore=0;
let wins = document.querySelector('.Wins')

let playerSelection;
let computerSelection;

let pcScore=0;
let loses= document.querySelector('.loses')

let tie=0
let draw = document.querySelector('.ties')
let results = document.querySelector('.result')
let hud= document.querySelector('.hud')
const guy = document.querySelector('.smokingGuy')
const rock = document.querySelector('.rock');

rock.addEventListener('click',playrock);
function playrock(){
    rock.classList.add('choosed');
  game(playerSelection='rock');
}

const paper = document.querySelector('.paper')
paper.addEventListener('click',playpaper);
function playpaper(){
    paper.classList.add('choosed');
   game(playerSelection='paper');
}

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click',playscissors);
function playscissors(){
    scissors.classList.add('choosed');
game(playerSelection='scissors');
}
const robot = document.querySelector('.Robot');
const Rchoice = document.querySelector('.Rchoice');

function playsound(name){
    let audio = document.querySelector(name);
    audio.play();
    audio.currentTime=0;

    setTimeout(() => {
      guy.classList.remove( 'winner', 'looser', 'tie');
      robot.classList.remove( 'winner', 'looser', 'tie');
      rock.classList.remove('choosed');
      paper.classList.remove('choosed');
      scissors.classList.remove('choosed');
      Rchoice.children[0].classList.remove('Rchoosed');
      Rchoice.children[1].classList.remove('Rchoosed');
      Rchoice.children[2].classList.remove('Rchoosed');
    }, 3000);
    if(round==5){
        endGame()
    }

  }
let endH= document.createElement('h2')
let endPc= document.createElement('h2')
let retry=document.createElement('h2')
let Game=document.querySelector('.game')
let human= document.querySelector('.human')
let hChoice=document.querySelector('.Choices')
let machine = document.querySelector('.Computer')
function endGame(){
    if(hScore>pcScore){
        hud.remove();
        machine.remove();
        hChoice.remove();
        human.appendChild(endH)
        endH.style.alignSelf='center'
        endH.textContent='You win!!!'
    }
    if(pcScore>hScore){
        hud.remove();
        human.remove();
        Rchoice.remove();
        machine.appendChild(endPc)
        endPc.style.alignSelf ='center'
        endPc.textContent='You lose!!!'
    }
    if(hScore==pcScore){
        hud.remove();
        hChoice.remove();
        Rchoice.remove();
        human.appendChild(endH)
        endH.style.alignSelf='center'
        endH.textContent='It\'\s a'
        machine.appendChild(endPc)
        endPc.style.alignSelf ='center'
        endPc.textContent='tie!!!'
    
    }
    Game.appendChild(retry)
    retry.textContent='Play again?'
    retry.classList.add('reStyle')
    retry.addEventListener('click', function() {
        location.reload();
    })
}