let playerScore = 0;
let computerScore = 0;
let score = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3 + 1);
}

// function getPlayerChoice() {
//   let guess = prompt("Rock, Paper, Scissors?");
//   if (guess.toLowerCase() === "paper") {
//     return 1;
//   } else if (guess.toLowerCase() === "scissors") {
//     return 2;
//   } else if (guess.toLowerCase() === "rock") {
//     return 3;
//   } else console.log("Incorrect Entry");
//   return 0;
// }

function winOrLose(player, computer) {
  if (player === computer) {
    console.log("Draw this round!")
    return;
  } else if (
    (computer === 1 && player === 2) ||
    (computer === 2 && player === 3) ||
    (computer === 3 && player === 1)
  ) {
    console.log("Player won this round!");
    return -1;
  } else if (
    (computer === 2 && player === 1) ||
    (computer === 3 && player === 2) ||
    (computer === 1 && player === 3)
  ) {
    console.log("Computer won this round!");
    return 1;
  } else console.log("uh oh!");
}

function outputString(number) {
  if (number === 1) {
    return "Paper";
  } else if (number === 2) {
    return "Scissors";
  } else if (number === 3) {
    return "Rock";
  }
  console.log("bugger");
}

function playRound(player, computer) {
  let string = "";
  string = outputString(player);
  console.log("Players choice is: ", string);
  string = outputString(computer);
  console.log("Computers choice is: ", string);
  return winOrLose(player, computer);
}

function gameWinner(player, computer) {
  if (player > computer) {
    console.log("Player is the winner!");
  } else console.log("Computer is the winner!");
  return;
}

function clearScreen() {
  const clearDiv = document.querySelector(".output");
  clearDiv.innerHTML = "";
}

function playGame(player) {
  while (
    (playerScore !== 3 && computerScore !== 3)
  ) {
    let playerChoice = player;
    let computerChoice = getComputerChoice();

    let roundResult = playRound(playerChoice, computerChoice);

    if (roundResult === 1) {
      computerScore++;
    } else if (roundResult === -1) {
      playerScore++;
    }
  
    const playerChoiceOutput = document.createElement("p");
    playerChoiceOutput.textContent = `Player's choice: ${outputString(player)}`;
    const computerChoiceOutput = document.createElement("p");
    computerChoiceOutput.textContent = `Computer's choice: ${outputString(computerChoice)}`;
    const screenOutput = document.querySelector(".output");
    screenOutput.appendChild(playerChoiceOutput);
    screenOutput.appendChild(computerChoiceOutput);
    const playerScoreOutput = document.createElement("p");
    playerScoreOutput.textContent = `Player's Score: ${playerScore}`;
    screenOutput.appendChild(playerScoreOutput);
    const computerScoreOutput = document.createElement("p");
    computerScoreOutput.textContent = `Computer's Score: ${computerScore}`;
    screenOutput.appendChild(computerScoreOutput);

    return;
  }

  gameWinner(playerScore, computerScore);
}

let rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
  clearScreen();
  playGame(3);
});

let paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
  clearScreen();
  playGame(1);
});

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
  clearScreen();
  playGame(2);
});
