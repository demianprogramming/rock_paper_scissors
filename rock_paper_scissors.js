// Test Hello World Console Linked
console.log("Hello World");

// Write a funtion that randomly returns "rock", "paper", "scissors".
// Generate a random number using Mathr.random
// Use IF ELSE statments to return desired values when a number is generated.
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100 + 1); 
    let computerResult;
    if (randomNumber <= 33) {
        computerResult = "rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        computerResult = "paper";
    } else {
        computerResult = "scissors";
    }
    return computerResult;
}

// Create a function that takes "rock, paper or scissors" as the parameters
// The function returns one of the strings
function getHumanChoice() {
    let humanResult = prompt("Play your pick rock, paper, or scissors.").toLowerCase();
    return humanResult;
}

// Add two variables to keep the score of the players
// Inicialize those values at 0

humanScore = 0;
computerScore = 0;

// Create a funtion that takes two arguments: comp and human
// Make humanChoice parameter  case insensitive
// Compare arguments
// Increment Human or Computer Score

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    let roundResult;
    if (computerChoice === "rock" && humanChoice === "scissors") {
        roundResult = "Rock beats Scissors. The Winner is Computer!";
        if (roundResult === "Rock beats Scissors. The Winner is Computer!"){
            ++computerScore;
        }
    }   else if (computerChoice === "paper" && humanChoice === "rock"){
        roundResult = "Paper beats Rock. The Winner is Computer!";
        if (roundResult === "Paper beats Rock. The Winner is Computer!"){
            ++computerScore;
        }
    }   else if (computerChoice === "scissors" && humanChoice === "paper"){
        roundResult = "Scissors beats Paper. The Winner is Computer!";
        if (roundResult === "Scissors beats Paper. The Winner is Computer!"){
            ++computerScore;
        }
    }   else if (computerChoice === "scissors" && humanChoice === "rock"){
        roundResult = "Rock beats Scissors. The Winner is Human!";
        if (roundResult === "Rock beats Scissors. The Winner is Human!"){
            ++humanScore;
        }
    }   else if (computerChoice === "rock" && humanChoice === "paper"){
        roundResult = "Paper beats Rock. The Winner is Human!";
        if (roundResult === "Paper beats Rock. The Winner is Human!"){
            ++humanScore;
        }
    }   else if (computerChoice === "paper" && humanChoice === "scissors"){
        roundResult = "Scissors beats Paper. The Winner is Human!";
        if (roundResult === "Scissors beats Paper. The Winner is Human!"){
            ++humanScore;
        }
    }   else {
        roundResult = "It's a draw! Let's go again!";
    }
    return roundResult;
}

