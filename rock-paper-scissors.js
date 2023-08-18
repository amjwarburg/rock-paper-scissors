//get random computer choice

function getComputerChoice() {
  value = (Math.random())

  if (value < 0.33) {
    return 'rock';
  }
  else if (value > 0.33 && value < 0.66) {
    return 'paper'
  }

  else if (value > 0.66) {
  return 'scissors'
  }
}

// declare function for each round

const playerChoiceText = document.querySelector('.p-choice-text')
const computerChoiceText = document.querySelector('.c-choice-text')
let playerScore = 0;
let computerScore = 0;
const playerScoreText = document.querySelector('.p-score-text')
const computerScoreText = document.querySelector('.c-score-text')
const champion = document.querySelector('.champion')

function playRound(playerSelection, computerSelection) {
  const playerChoice = `Player choice: ${playerSelection}`
  const computerChoice = `Computer choice: ${computerSelection}`
  playerChoiceText.textContent = playerChoice;
  computerChoiceText.textContent = computerChoice;


  const pScore = `Player: ${playerScore}`
  const cScore = `Computer: ${computerScore}`
  playerScoreText.textContent = pScore;
  computerScoreText.textContent = cScore;

  // declare variable to hold result
  let winner = ""; // One of player, computer, tie

  // player chooses rock
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    winner = "computer";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    winner = 'player'
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    winner = 'tie';
  } 

  // player chooses paper
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    winner = 'player';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    winner = 'computer';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    winner = 'tie';
  } 


  // player chooses scissors
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    winner = 'computer';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    winner = 'player';
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    winner = 'tie'; 
  } 

  // log outcome
  console.log("Winner/tie: "+winner);

  // return result
  return winner;
  
}

// declare function for full game
function game() {

  


computerSelection = getComputerChoice();
  
let outcome
    
// declare variables for the score



  let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
outcome = playRound('rock', getComputerChoice())
if (outcome === 'player') {
  ++playerScore
} else if (outcome === 'computer') {
  ++computerScore
} 

console.log('Player: ' + playerScore + ' Computer: ' + computerScore);
if (playerScore === 5) {
  console.log('Player wins!');
} else if (computerScore === 5) {
  console.log('Computer wins!');
}
})

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
outcome = playRound('paper', getComputerChoice())  
if (outcome === 'player') {
  ++playerScore
} else if (outcome === 'computer') {
  ++computerScore
} 

console.log('Player: ' + playerScore + ' Computer: ' + computerScore);
if (playerScore === 5) {
  console.log('Player wins!')
} else if (computerScore === 5) {
  console.log('Computer wins!') 
}
})

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
outcome = playRound('scissors', getComputerChoice())  
if (outcome === 'player') {
  ++playerScore
} else if (outcome === 'computer') {
  ++computerScore
} 

if (playerScore === 5) {
  champion.textContent = 'Player wins!';
} else if (computerScore === 5) {
  champion.textContent = 'Computer wins!'
}

console.log('Player: ' + playerScore + ' Computer: ' + computerScore);
})





}

game()