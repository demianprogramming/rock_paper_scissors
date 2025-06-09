// Test Hello World Console Linked
console.log("Hello World");

// Write a funtion that randomly returns "rock", "paper", "scissors".
// Generate a random number using Mathr.random
// Use IF ELSE statments to return desired values when a number is generated.
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100 + 1); 
    let result;
    if (randomNumber <= 33) {
        result = "rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return result;
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

function playRound(getComputerChoice, getHumanChoice) {
    
}

