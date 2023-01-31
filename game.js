
// Declare a function that returns rock paper or scissors randomly

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3)

    if (randomChoice === 0) {
        return 'ROCK'
    } else if (randomChoice === 1) {
        return 'PAPER'
    } else if (randomChoice === 2) {
        return 'SCISSORS'
    }
}

// Write a function that plays Rock Paper Scissors and return the Winner

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {

        return "You win";
    } else if (playerSelection === computerSelection) {
        return "Continue"
    } else {
        return "You loose"
    }  

}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();

// Write a function to play 5 times

function game() {
    for (let i = 0; i < 5; i ++){
        const playerSelection = "ROCK";
        const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection));
    }
    
}

game();