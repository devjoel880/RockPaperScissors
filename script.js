let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function getHumanChoice() {
    let humanChoice = prompt('Enter your choice (rock, paper, or scissors):');
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice.toLowerCase() === computerChoice) {
        console.log("It's a tie!");
    } else {
        console.log("Invalid choice by human or computer.");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
