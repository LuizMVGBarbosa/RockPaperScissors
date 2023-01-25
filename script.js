const game = ["Rock","Paper","Scissors"]
function getComputerChoice(){
    return game[ Math.floor(Math.random() * game.length)] ;
}