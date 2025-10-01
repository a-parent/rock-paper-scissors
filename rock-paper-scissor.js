/* Algorithm: 
    1. Get computer choice
        Get number between 1-3
        Assign 1 to rock, 2 to paper, 3 to scissor
    2. Ask for player's choice
    3. Compare results
    4. Log winner
*/

let computerChoice = 0;
function getComputerChoice(x) {
  x = Math.floor(Math.random() * 3);
  if (x === 0) {
    computerChoice = `ROCK`;
  } else if (x === 1) {
    computerChoice = `PAPER`;
  } else if (x === 2) {
    computerChoice = `SCISSOR`;
  }
  return computerChoice;
}

let playerChoice = 0;
function getPlayerChoice() {
  playerChoice = prompt(`Make your Choice!`);
  return playerChoice;
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerChoice, computerChoice) {
  playerChoice=playerChoice.toUpperCase();
  computerChoice=computerChoice.toUpperCase();
  if (
    playerChoice == `ROCK` &&
    computerChoice == `PAPER` ||
    playerChoice == `PAPER` &&
    computerChoice == `SCISSOR` ||
    playerChoice == `SCISSOR` &&
    computerChoice == `ROCK`
  ) {
    computerScore++;
  } else if (playerChoice.toUpperCase() == computerChoice.toUpperCase()) {
    console.log(`It's a tie!`);
  } else {
    playerScore++;
  }
}

function playGame() {
  computerScore=0;
  playerScore=0;
  while (computerScore < 5 && playerScore < 5) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    console.log(`P= ` + playerChoice);
    console.log(`C= ` + computerChoice);
    console.log(`Computer Score: ` + computerScore);
    console.log(`Player Score: ` + playerScore);
  }
 if (computerScore > playerScore){
    console.log(`Computer Wins!`);
 } else {
    console.log(`Player Wins!`);
 }
}
playGame();