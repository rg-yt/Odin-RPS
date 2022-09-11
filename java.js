// create a computer choice
    // make computer choice random
// get a choice from user 
// compare computer and user choice
// send result to user

function getComputerChoice(choice){
    let x = Math.floor(Math.random()*3);
    if (x==0){
        return "ROCK";
    }else if (x==1){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    if (playerSelection == computerSelection){
        return "It's a Tie!"
    }else if(playerSelection == "ROCK" && computerSelection == "SCISSORS"||playerSelection == "PAPER" && computerSelection== "ROCK"||playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return "You Win!"
    } else {
        return "You Lost!"
    }
}