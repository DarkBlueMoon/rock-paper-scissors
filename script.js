let playerScore = 0;
let computerScore = 0;

// Randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

// Rock > Scissors
// Scissors > Paper
// Paper > Rock
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Draw: both player choices are the same";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function determineWinner() {
  if (playerScore > computerScore) {
    return "Game Over! Player wins!";
  } else if (computerScore > playerScore) {
    return "Game Over! Computer wins!";
  } else {
    return "Game Over! Draw Game!";
  }
}

// Play a 5-round game that keeps score and reports a winner or loser at the end
function game() {
  const MAX_ROUNDS = 5;

  for (let i = 0; i < MAX_ROUNDS; i++) {
    // TODO: handle invalid input by using a default value
    const playerSelection = prompt("Choose 'rock', 'paper', or 'scissors'", "");
    console.log(playRound(playerSelection, getComputerChoice()));
  }

  console.log(determineWinner());
}
game();