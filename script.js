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
        alert("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        alert("You lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        alert("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        alert("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice.toLowerCase() === computerChoice) {
        alert("It's a tie!");
    } else {
        alert("Invalid choice by human or computer.");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    alert(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
