let wins = 0;
let loss= 0;
let tie = 0;

// create function called computerPlay
function computerPlay(){
    // generate a number between 0-2
    com = Math.floor(Math.random()*3);
    // check value is working 
    // console.log(com);
    // return rock, paper or scissors depeding on the value
    if (com === 0){
        return "Rock";
    }
    else if(com==1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

// create a function to simulate a round
// compare player selected value vs computerPlay value
//
function playRound(playerSelect,p2){
    
    p1= playerSelect.toLowerCase();
    p2= computerPlay().toLowerCase();
    console.log(p2);
    if(p1===p2){
        text.textContent="Your opponent chose "+p2+". "+"It's a tie!"
        tie++;
    }
    else if(p1==="rock" && p2 ==="scissors"||
    p1==="paper" && p2 ==="rock"||
    p1==="scissors" && p2 ==="paper"){
        text.textContent= "Your opponent chose "+p2+". "+"You win this round!";
        wins++;
    }
    else if(p2==="rock" && p1 ==="scissors"||
    p2==="paper" && p1 ==="rock"||
    p2==="scissors" && p1 ==="paper") {
        text.textContent= "Your opponent chose "+p2+". "+"You lose this round!";
        loss++;      
    }
    if(wins===5&&wins>loss){
        text.textContent="You won the game!"
        wins=0;
        loss=0;
        tie=0;
    }
    else if(loss===5&& loss>wins){
        text.textContent="You lost the game!"
        wins=0;
        loss=0;
        tie=0;
    }


}

const score = document.querySelector('#score');
const buttons = document.querySelectorAll('button');
const text= document.querySelector('#result');
const choice= document.querySelector('#choice');
score.textContent="Wins:" + wins + "   " + "Loss:" + loss + " " + "Tie:" + tie;
buttons.forEach((button) =>{
    
    button.addEventListener('click', ()=> {
        
        playRound(button.id);
        choice.textContent='You picked: '+button.id;
        score.textContent="Wins:" + wins + "   " + "Loss:" + loss + " " + "Tie:" + tie;
        
    });

});


//create a function game to call the play round 
//after 5 rounds determine overall winner
// function playGame(){
    
//     for (let i=0; i<5; i++){
//         playRound(prompt("Rock, Paper, or Scissors?",));
        
//     }
//     if(wins>loss){
//         console.log("You win the match!")  
//     }
//     else if(wins<loss){
//         console.log("You lost the match") 
//     }
//     else {
//         console.log("It's a draw!")
//     }
//     wins=0;
//     loss=0;
// }
