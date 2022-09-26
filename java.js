let wins = 0;
let loss = 0;

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
        updateScore();
        message.innerText = `You picked ${playerSelection}. Your opponent picked ${computerSelection}. It's a Tie!`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        wins += 1;
        updateScore();
        message.innerText = `You picked ${playerSelection}. Your opponent picked ${computerSelection}. You Win!`;
    } else {
        loss += 1;
        updateScore();
        message.innerText = `You picked ${playerSelection}. Your opponent picked ${computerSelection}. You Lost!`;

    };
    if (wins == 5 || loss == 5) {
        gameover();
    }
}

function updateScore() {
    cpuscore.innerText = `${loss}`;
    plscore.innerText = `${wins}`;
}

function gameover() {
    if (wins > loss) {
        message.innerText = `The score was ${wins} to ${loss}. You won the game!`;
    } else {
        message.innerText = `The score was ${wins} to ${loss}. You lost the game!`;
    };
    wins = 0;
    loss = 0;
}


