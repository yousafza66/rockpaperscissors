const buttons = document.querySelectorAll('button');
let player_score=0, computer_score=0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection= button.id;
        document.getElementById('p3').innerHTML= button.id;
        computerSelection= getComputerChoice();
        document.getElementById('p4').innerHTML= computerSelection;
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
    })
})


const choices= ["rock","paper","scissors"];
function getComputerChoice(){
    let randInt = Math.floor(Math.random()*choices.length); //Math.floor rounds down to the nearest integer and math.random generates a floating point number between 0 (inclusive) and 1 (exclusive)
    return choices[randInt];
}


function playRound(playerSelection, computerSelection){
    while(player_score!=5 && computer_score!=5){
        result="";
        if(playerSelection==computerSelection.toLowerCase()){
            result= "Tie";
        }
        else if((playerSelection=="rock" && computerSelection == "scissors") || (playerSelection=="paper" && computerSelection == "rock") || (playerSelection=="scissors" && computerSelection == "paper")) {
            result= "You win";
            player_score+=1;
        }
        else{
            result= "You lose";
            computer_score+=1;
        }
        document.getElementById('result').innerHTML= result;
        document.getElementById('p_score').innerHTML= "Score:"+ player_score;
        document.getElementById('c_score').innerHTML= "Score:"+computer_score;
        return
    }
    if(player_score>computer_score)
    {
        alert("You win")
    }
    else if(computer_score>player_score)
    {
        alert("You lose")
    }
    else{
        alert("Tie")
    }
    
}

function game(){
    
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


