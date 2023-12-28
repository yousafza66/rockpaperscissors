function getComputerChoice(){
    const choices= ["Rock","Paper","Scissors"];
    let randInt = Math.floor(Math.random()*choices.length); //Math.floor rounds down to the nearest integer and math.random generates a floating point number between 0 (inclusive) and 1 (exclusive)
    return choices[randInt];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){
        return "You tie!"
    }
    else if((playerSelection.toLowerCase()=="rock" && computerSelection == "Scissors") || (playerSelection.toLowerCase()=="paper" && computerSelection == "Rock") || (playerSelection.toLowerCase()=="scissors" && computerSelection == "Paper")) {
        return "You win!"
    }
    else{
        return "You Lose!"
    }
}

var input= getComputerChoice()
console.log(input)
console.log(playRound("ScisSors",input))