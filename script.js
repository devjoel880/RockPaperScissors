
let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const buttons = document.querySelectorAll("button");
const result = document.querySelector(".results");

// LOGIC FOR COMPUTER CHOICE
const choices = ["rock", "paper", "scissors"];

// LOGIC TO DISPLAY RESULTS
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let randomChoice = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomChoice];

        if (button.id.toLowerCase() == "paper" && computerChoice == "rock") {
            humanScore++;
        } else if (button.id.toLowerCase() == "paper" && computerChoice == "scissors") {
            computerScore++;
        } else if (button.id.toLowerCase() == "rock" && computerChoice == "paper") {
            computerScore++;
        } else if (button.id.toLowerCase() == "rock" && computerChoice == "scissors") {
            humanScore++;
        } else if (button.id.toLowerCase() == "scissors" && computerChoice == "paper") {
            humanScore++;
        } else if (button.id.toLowerCase() == "scissors" && computerChoice == "rock") {
            computerScore++;
        } else if (button.id.toLowerCase() == computerChoice) {
            alert("It's a tie!");
        }

        result.innerHTML = `
            <p>You chose: ${button.id}</p>
            <p>Computer chose: ${computerChoice}</p>
            <h6>You - ${humanScore} | Computer - ${computerScore}</h6>
        `;
        
    });
});
