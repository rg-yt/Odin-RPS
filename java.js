// create a computer choice
    // make computer choice random
// get a choice from user 
// compare computer and user choice
// send result to user

function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    if (x==0){
        return "ROCK";
    }else if (x==1){
        return "PAPER";gi
    } else {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection = getComputerChoice()){
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection){
        return "It's a Tie!"
    }else if(playerSelection == "ROCK" && computerSelection == "SCISSORS"||
            playerSelection == "PAPER" && computerSelection== "ROCK"||
            playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return "You Win!"
    } else {
        return "You Lost!"
    }
}