function getComputerChoice(weapon) {
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
  if (playerSelection === 'rock' && computerSelection === 'paper') {
  return 'You lose! Paper beats rock.';
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
  }
}

let playerSelection = 'paper';
playerSelection = playerSelection.toLowerCase()
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
