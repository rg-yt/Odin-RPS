let wins = 0;
let loss = 0;
let score;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});
const plscore = document.querySelector('.p-score');
const cpuscore = document.querySelector('.c-score');
const message = document.querySelector('.main');

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "Rock";
    } else if (x == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = this.innerText;
    if (playerSelection === computerSelection) {
        message.innerText = `You picked ${playerSelection}. Your opponent picked ${computerSelection}. It's a Tie!`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        wins +=1;
        plscore.innerText = `${wins}`;
        message.innerText = `You picked ${playerSelection}. Your opponent picked ${computerSelection}. You Win!`;
    } else {
        loss+=1;
        cpuscore.innerText = `${loss}`;
        message.innerText = `You picked ${playerSelection}. Your opponent picked ${computerSelection}. You Lost!`;

    }
    if(wins == 5 || loss == 5){
        resetScore;
    }
    
}

function resetScore() {
    score = wins;
    wins = 0;
    loss = 0;
}




// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound());
//     }
//     if (wins > loss) {
//         resetScore();
//         return `You won ${score} rounds. You won the game!`
//     } else if (wins < loss) {
//         resetScore();
//         return `You won ${score} rounds. You lost the game!`
//     } else {
//         resetScore();
//         return `It's a tie game! Try again!`
//     }

// }

// create a computer choice
// make computer choice random
// get a choice from user 
// compare computer and user choice
// send result to user