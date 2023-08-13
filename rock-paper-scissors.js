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

function playRound(playerSelection, computerSelection) {
  // log player choice
  console.log("Player choice: "+playerSelection);
  // log computer choice
  console.log('Computer choice: '+computerSelection)

  // declare variable to hold result
  var winner = ""; // One of player, computer, tie

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    winner = "computer";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock beats scissors.'
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'It\'s a tie!';
  }

  if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats rock.';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lose! Scissors beats paper.';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'It\'s a tie!';
  }

  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lose! Rock beats scissors.';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win! Scissors beats paper.';
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'It\'s a tie!';
  } else return 'Unknown input'

  // log outcome
  console.log("Winner was: "+winner);

  // return result
  return winner;

}

function getPlayerChoice() {
  return prompt()
}

function game() {
  var outcome;

  // declare variables for the scores

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    
    
    outcome = playRound(playerSelection, computerSelection);

    // increment score based on outcome
  }

  // Output scores and result

}

game()