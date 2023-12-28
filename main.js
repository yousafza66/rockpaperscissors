const choices= ["rock","paper","scissors"];
function getComputerChoice(){
    let randInt = Math.floor(Math.random()*choices.length); //Math.floor rounds down to the nearest integer and math.random generates a floating point number between 0 (inclusive) and 1 (exclusive)
    return choices[randInt];
}

function getPlayerInput(){
    let validInput = false;
    while(validInput==false){
        const choice= prompt("Enter rock, paper or scissor: ");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        console.log(choiceInLower);
        if(choices.includes(choiceInLower)){
            validInput = true;
            return choiceInLower;
        }
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection.toLowerCase()){
        return "Tie"
    }
    else if((playerSelection=="rock" && computerSelection == "Scissors") || (playerSelection.toLowerCase()=="paper" && computerSelection == "Rock") || (playerSelection.toLowerCase()=="scissors" && computerSelection == "Paper")) {
        return "Player"
    }
    else{
        return "Computer"
    }
}

function game(){
    var player_score=0, computer_score=0;
    for(let i=0; i<5;i++)
    {
        const computerSelection= getComputerChoice();
        console.log(computerSelection)
        
        
        if(playRound(getPlayerInput(), computerSelection)=="Player"){
            player_score+=1;
            console.log("player gets 1 point")
        }
        else if(playRound(getPlayerInput(), computerSelection)=="Computer"){
            computer_score+=1;
            console.log("comp gets one point")
        }
        else{
            console.log('tie')
        }
    }
    console.log(computer_score);
    console.log(player_score);

    if(player_score > computer_score){
        return "Player wins"
    }

    else if(player_score < computer_score){
        return "Computer wins"
    }

    else{
        return "Tie"
    }
}

console.log(game())