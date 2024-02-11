# odin-rock-paper-scissors-project
pseudocode >
- get randomized computer choice for round (function getComputerChoice)
- play round of rock paper scissors (function playRound with parameters playerSelection and computerSelection)
- playerSelection should be case insensitive and accept "rock" or "roCk" or "ROCK"
- return string for winner or loser ie "You lose! Paper beats rock" / DO NOT console.log this
- play five rounds of game. (function playGame) loop required
- keep score over 5 rounds. output to console winner of each round
- display output of winner of game

// use prompt() for player input

let playerScore = 0
let computerScore = 0
let score = 0

invoke playGame function
> while NOT ((playerScore > computerScore OR computerScore > playerScore) AND (score === 3 OR score === -3))
>> invoke getComputerChoice function ( ) > return
>> invoke getPlayerChoice function ( ) > return
>> invoke playRound function ( playerScore, computerScore, score)  
>>> invoke winOrLose function ( ) > return
>> check scores / invoke checkScores function ( )
>>> if player won -> score++
>>> if computer won -> score--
>>> if draw -> i--
>>> if score = 3 or -3 -> winner = player or computer
>> if score is + -> player won 
>> if score is - -> computer won
>> invoke toString function ( ) > return
>> output winOrLose as string
>> return

WIN CONDITIONS
3-0
3-1
3-2
2-3
1-3
0-3

FAILED ATTEMPT
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
