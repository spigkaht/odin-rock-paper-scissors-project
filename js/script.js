let roundResult = "";

function getComputerChoice() {
  return Math.floor(Math.random() * 3 + 1);
}

function getPlayerChoice() {
  return Math.floor(Math.random() * 3 + 1 );
}

function toString(num) {
  switch (num) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
    default: 
      console.log("unknown error")
  }
}

function playRound(computer, player) {
  if (computer === player) {
    return "Draw!";
  } else if (
    (computer === "Rock" && player === "Paper") ||
    (computer === "Paper" && player === "Scissors") ||
    (computer === "Scissors" && player === "Rock")    
    ) {
    return "You Win!";
  } else if (
    (computer === "Paper" && player === "Rock") ||
    (computer === "Scissors" && player === "Paper") ||
    (computer === "Rock" && player === "Scissors") 
    ) {
      return "You lose!";
    } else return "uh oh";
}

function playGame() {
  let playerTotal;
  let computerTotal;
  for (let i = 0; i <= 5; i++) {
    roundResult = playRound(computerChoice, playerChoice);
    if (roundResult === "You win!") {
      playerTotal++;
    } else if (roundResult === "You lose!") {
      computerTotal++;
    } else if (roundResult === "Draw!") {
      break;
    }
  }
  
  if (playerTotal > computerTotal) {
    return "You win! Player score: " + playerTotal + " Computer score: " + computerTotal;
  }
}

let computerChoice = toString(getComputerChoice());
let playerChoice = toString(getPlayerChoice());
let endResult = playGame(computerChoice, playerChoice);

console.log("computer: ", computerChoice);
console.log("player: ", playerChoice);
console.log("result: ", roundResult);
console.log("end result: ", endResult);
