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
function playRound(playerSelection, computerSelection) {
  // log player choice
  console.log("Player choice: "+playerSelection);
  // log computer choice
  console.log('Computer choice: '+computerSelection);

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

let playerSelection
computerSelection = getComputerChoice();
  
let outcome


    
// declare variables for the score
let playerScore = 0;
let computerScore = 0;


let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
outcome = playRound('rock', getComputerChoice())
})

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
playRound(playerSelection = 'paper', getComputerChoice())  
})

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
playRound(playerSelection = 'scissors', getComputerChoice())  
})
  
// increment score based on outcome
if (outcome === 'player') {
  ++playerScore
} else if (outcome === 'computer') {
  ++computerScore
} else {

}


// declare score each round
 console.log('Player: ' + playerScore + ' Computer: ' + computerScore);
  

/* Output scores and result
console.log('Player scored: ' + playerScore + ' Computer scored: ' + computerScore)
if (playerScore > computerScore) {
    console.log('Player wins!')
} else if (computerScore > playerScore) {
  console.log('Computer wins!')
} else if (computerScore === playerScore) {
  console.log ('It\'s a tie')
 } */
}

game()