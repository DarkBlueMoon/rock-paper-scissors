const gameOptions = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const p1Score = document.querySelector("#playerOne");
const p2Score = document.querySelector("#playerTwo");
const MAX_SCORE = 5;

let playing = true;

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
    p1Score.textContent++;
  } else {
    roundResult = `You lose! ${computerSelection} beats ${playerSelection}!`;
    p2Score.textContent++;
  }

  return roundResult;
}

function addResult(res) {
  const p = document.createElement("p");
  p.textContent = res;
  resultsDiv.appendChild(p);
}

rockBtn.addEventListener("click", () => {
  if (playing) {
    addResult(playRound("rock", computerPlay()));
    checkScores();
  }
});
paperBtn.addEventListener("click", () => {
  if (playing) {
    addResult(playRound("paper", computerPlay()));
    checkScores();
  }
});
scissorsBtn.addEventListener("click", () => {
  if (playing) {
    addResult(playRound("scissors", computerPlay()));
    checkScores();
  }
});

function announceWinner(winner) {
  // Set playing flag to false (disable button events until game is reset)
  // Announce whether player 1 or player 2 won

  playing = false;
  const p = document.createElement("p");
  p.textContent = `The winner is ${winner}!`;
  resultsDiv.appendChild(p);
}

function checkScores() {
  if (parseInt(p1Score.textContent) === 5) {
    announceWinner("Player");
  } else if (parseInt(p2Score.textContent) === 5) {
    announceWinner("CPU");
  }
}
