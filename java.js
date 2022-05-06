

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
    wins=0;
    loss=0;
    console.log(p2);
    if(p1===p2){
        console.log("It's a tie!")
    }
    else if(p1==="rock" && p2 ==="scissors"||
    p1==="paper" && p2 ==="rock"||
    p1==="scissors" && p2 ==="paper"){
        console.log("You win the round!")
        wins++;
    }
    else if(p2==="rock" && p1 ==="scissors"||
    p2==="paper" && p1 ==="rock"||
    p2==="scissors" && p1 ==="paper") {
        console.log("You lose this round!")  
        loss++;      
    }
    else if (p1 != "rock"||p1 != "paper"||p1 != "scissors"){
        console.log("Please enter Rock, Paper, or Scissors!")
    }
}
//create a function game to call the play round 
//after 5 rounds determine overall winner
function playGame(){
    
    for (let i=0; i<5; i++){
        playRound(prompt("Rock, Paper, or Scissors?",));
        
    }
    if(wins>loss){
        console.log("You win the match!")  
    }
    else if(wins<loss){
        console.log("You lost the match") 
    }
    else {
        console.log("It's a draw!")
    }
    wins=0;
    loss=0;
}



