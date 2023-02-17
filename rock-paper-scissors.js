function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a draw!";
    }

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win! Rock beats Scissors";
        }
        else return "You lose! Paper beats rock";
    
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock";
        }
        else return "You lose! Scissors beats paper";
    }

    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors beats Paper";
        }
        else return "You lose! Rock beats scissors";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Scissors, paper, or rock?"), getComputerChoice()));
     }
}

game();