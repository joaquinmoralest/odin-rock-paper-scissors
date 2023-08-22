const OPTIONS = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return 'TIE!'
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {

    computerScore++

    return "You Lose! Paper beats Rock"
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {

    computerScore++

    return "You Lose! Rock beats Scissors"
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {

    computerScore++

    return "You Lose! Scissors beats Paper"
  } else {
    playerScore++

    return "You win!"
  }
}

function game() {
  let result = ''

  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt('Chose rock, paper or scissors:')
    const computerSelection = getComputerChoice()
    result = playRound(playerSelection, computerSelection)

    console.log(`You choose ${playerSelection}, computer choose ${computerSelection}\n${result}`)
  }

  console.log(`Finish!\nResults:\n${playerScore}\n${computerScore}`)
}

game()