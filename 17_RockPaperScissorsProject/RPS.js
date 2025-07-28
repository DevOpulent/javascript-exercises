// Initialize score variables for both players
// These will track how many rounds each player has won
let humanScore = 0;
let computerScore = 0;

// Function to randomly return "rock", "paper", or "scissors"
function getComputerChoice () {
    // Generate a random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);
    
    // Return one of the three options based on the random number
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else if (randomNum === 2) {
        return "scissors";
    }
}

// Function to get the human player's choice
function getHumanChoice () {
    // Prompt the user to type their choice
    let choice = prompt("Your turn! Choose rock, paper, or scissors.");

    // Convert input to lowercase to make the comparison case-insensitive
    choice = choice.toLowerCase();

    // Check if the input is valid and return it
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
    // If the input is invalid, the function doesn't return anything
}

// Function that plays one round of the game
function playRound(humanChoice, computerChoice) {
    // Ensure human input is lowercase (just in case)
    humanChoice = humanChoice.toLowerCase();

    // Check if it's a tie
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    // Check if the human wins
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        // Increment human's score
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } 
    // Otherwise, the computer wins
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

// Function to play a full game of 5 rounds
function playGame() {
    // Loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        // Get choices from both players
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // Play a round using the two selections
        playRound(humanSelection, computerSelection);
    }

    // Display the final scores after all rounds are done
    console.log(`Final Score — You: ${humanScore} | Computer: ${computerScore}`);

    // Announce the overall winner based on the scores
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game by calling playGame
playGame();
