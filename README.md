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
