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

// Create a funtion that takes two arguments: comp and human
// Make humanChoice() parameter  case insensitive
// Compare arguments
// Increment Human or Computer Score

function playRound(humanChoice, computerChoice) {
   
    
    let roundResult;
        if (computerChoice === "rock" && humanChoice === "scissors") {
        roundResult = "Rock beats Scissors. The Winner is Computer!";
    }   else if (computerChoice === "paper" && humanChoice === "rock"){
        roundResult = "Paper beats Rock. The Winner is Computer!";
    }   else if (computerChoice === "scissors" && humanChoice === "paper"){
        roundResult = "Scissors beats Paper. The Winner is Computer!";
    }   else if (computerChoice === "scissors" && humanChoice === "rock"){
        roundResult = "Rock beats Scissors. The Winner is Human!";
    }   else if (computerChoice === "rock" && humanChoice === "paper"){
        roundResult = "Paper beats Rock. The Winner is Human!";
    }   else if (computerChoice === "paper" && humanChoice === "scissors"){
        roundResult = "Scissors beats Paper. The Winner is Human!";
    }   else {
        roundResult = "It's a draw! Let's go again!";
    } return roundResult
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`--- Round ${round} ---`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(result);

        if (result.includes("The Winner is Computer!")) {
            computerScore++;
        } else if (result.includes("The Winner is Human!")) {
            humanScore++;
        }

        console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("----- Game Over -----");
    if (humanScore > computerScore) {
        console.log("You are the final winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the final winner!");
    } else {
        console.log("It's a final tie!");
    }
}



playGame();

// Write a function that takes playRound into playGame
// Play 5 Rounds
// Keeps tracks of the scores
// Declares a winner at the end

