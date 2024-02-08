// let roundResult = "";

// function getComputerChoice() {
//   return Math.floor(Math.random() * 3 + 1);
// }

// function getPlayerChoice() {
//   return Math.floor(Math.random() * 3 + 1 );
// }

// function toString(num) {
//   switch (num) {
//     case 1:
//       return "Rock";
//       break;
//     case 2:
//       return "Paper";
//       break;
//     case 3:
//       return "Scissors";
//       break;
//     default:
//       console.log("unknown error")
//   }
// }

// function playRound(computer, player) {
//   if (computer === player) {
//     return "Draw!";
//   } else if (
//     (computer === "Rock" && player === "Paper") ||
//     (computer === "Paper" && player === "Scissors") ||
//     (computer === "Scissors" && player === "Rock")
//     ) {
//     return "You Win!";
//   } else if (
//     (computer === "Paper" && player === "Rock") ||
//     (computer === "Scissors" && player === "Paper") ||
//     (computer === "Rock" && player === "Scissors")
//     ) {
//       return "You lose!";
//     } else return "uh oh";
// }

// function playGame() {
//   let playerTotal;
//   let computerTotal;
//   for (let i = 0; i <= 5; i++) {
//     roundResult = playRound(computerChoice, playerChoice);
//     if (roundResult === "You win!") {
//       playerTotal++;
//     } else if (roundResult === "You lose!") {
//       computerTotal++;
//     } else if (roundResult === "Draw!") {
//       break;
//     }
//   }

//   if (playerTotal > computerTotal) {
//     return "You win! Player score: " + playerTotal + " Computer score: " + computerTotal;
//   }
// }

// let computerChoice = toString(getComputerChoice());
// let playerChoice = toString(getPlayerChoice());
// let endResult = playGame(computerChoice, playerChoice);

// console.log("computer: ", computerChoice);
// console.log("player: ", playerChoice);
// console.log("result: ", roundResult);
// console.log("end result: ", endResult);

let playerScore = 0;
let computerScore = 0;
let score = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3 + 1);
}

function getPlayerChoice() {
  let guess = prompt("Rock, Paper, Scissors?");
}

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

function playGame() {
  while (
    (playerScore !== 3 && computerScore !== 3)
  ) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let roundResult = playRound(playerChoice, computerChoice);

    if (roundResult === 1) {
      computerScore++;
    } else if (roundResult === -1) {
      playerScore++;
    }

    console.log("player score: ", playerScore);
    console.log("computer score: ", computerScore);
    console.log("--------------------");

  }

  gameWinner(playerScore, computerScore);
}

playGame();

// >> invoke playRound function ( playerScore, computerScore, score )
// >>> invoke winOrLose function ( ) > return
// >> check scores / invoke checkScores function ( )
// >>> if player won -> score++
// >>> if computer won -> score--
// >>> if draw -> i--
// >>> if score = 3 or -3 -> winner = player or computer
// >> if score is + -> player won
// >> if score is - -> computer won
// >> invoke toString function ( ) > return
// >> output winOrLose as string
// >> return
