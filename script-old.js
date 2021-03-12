const gameOptions = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;

function computerPlay() {
  // Randomly return 'rock', 'paper', or 'scissors'.
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function playRound(playerSelection, computerSelection) {
  let roundResult;
  if (playerSelection === computerSelection) {
    roundResult = "It's a draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult = `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    roundResult = `You lose! ${computerSelection} beats ${playerSelection}!`;
  }

  return roundResult;
}

function game() {
  for (let i = 0; i < MAX_ROUNDS; i++) {
    const playerSelection = prompt(
      "Please choose: Rock, Paper, or Scissors"
    ).toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
