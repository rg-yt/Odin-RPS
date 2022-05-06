

// create function called computerPlay
function computerPlay(){
    // generate a number between 0-2
    com = Math.floor(Math.random()*3);
    // check value is working 
    console.log(com);
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