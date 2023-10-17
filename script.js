let playerScore = 0;
let computerScore = 0;
const rpsChoicesDiv = document.querySelector("#rps-choices");
const rpsResultsDiv = document.querySelector("#rps-results");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const WINNING_SCORE = 5;

rpsChoicesDiv.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "rock":
      playRound("rock", getComputerChoice());
      break;
    case "paper":
      playRound("paper", getComputerChoice());
      break;
    case "scissors":
      playRound("scissors", getComputerChoice());
      break;
    default:
      break;
  }
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

function createAndPostRPSResult(result) {
  const res = document.createElement("p");
  res.textContent = result;
  rpsResultsDiv.appendChild(res);
}

function updateScoreDisplay() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function disableChoices() {
  Array.from(rpsChoicesDiv.children).forEach((btn) => btn.disabled = true);
}

function checkForWinner() {
  if (playerScore === WINNING_SCORE) {
    createAndPostRPSResult("Game over! Player wins!");
    disableChoices();
  } else if (computerScore === WINNING_SCORE) {
    createAndPostRPSResult("Game over! Computer wins!");
    disableChoices();
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    createAndPostRPSResult("Draw: both player choices are the same");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    createAndPostRPSResult(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    computerScore++;
    createAndPostRPSResult(`You lose! ${computerSelection} beats ${playerSelection}`);
  }

  updateScoreDisplay();
  checkForWinner();
}