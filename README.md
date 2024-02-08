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

invoke playGame function
> while playerScore > computerScore AND playerScore - computerScore != 3 (and vice versa)
> loop 1-5 / loop conditions > 5 AND 
>> invoke getComputerChoice function ( ) > return
>> invoke getPlayerChoice function ( ) > return
>> invoke playRound function ( )  
>>> invoke winOrLose function ( ) > return
>> invoke toString function ( ) > return
>> output winOrLose as string
>> return
> 
