const gameOptions = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
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

function addResult(res) {
  const p = document.createElement("p");
  p.textContent = res;
  resultsDiv.appendChild(p);
}

rockBtn.addEventListener("click", () => {
  addResult(playRound("rock", computerPlay()));
});
paperBtn.addEventListener("click", () => {
  addResult(playRound("paper", computerPlay()));
});
scissorsBtn.addEventListener("click", () => {
  addResult(playRound("scissors", computerPlay()));
});

// function game() {
//   for (let i = 0; i < MAX_ROUNDS; i++) {
//     const playerSelection = prompt(
//       "Please choose: Rock, Paper, or Scissors"
//     ).toLowerCase();
//     const computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }

// game();
