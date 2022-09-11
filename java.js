// create a computer choice
// make computer choice random
// get a choice from user 
// compare computer and user choice
// send result to user
let wins = 0;
let loss = 0;
let score;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "rock";
    } else if (x == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    while (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    }
    if (playerSelection === computerSelection) {
        return `You picked ${playerSelection}. Your opponent picked ${computerSelection}. It's a Tie!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        wins += 1;
        return `You picked ${playerSelection}. Your opponent picked ${computerSelection}. You Win!`;
    } else {
        loss += 1;
        return `You picked ${playerSelection}. Your opponent picked ${computerSelection}. You Lost!`;

    }

}
function resetScore() {
    score = wins;
    wins = 0;
    loss = 0;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    if (wins > loss) {
        resetScore();
        return `You won ${score} rounds. You won the game!`
    } else if (wins < loss) {
        resetScore(score);
        return `You won ${score} rounds. You lost the game!`
    } else {
        resetScore(score);
        return `It's a tie game! Try again!`
    }

}