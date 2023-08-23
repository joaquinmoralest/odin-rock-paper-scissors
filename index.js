const OPTIONS = ["rock", "paper", "scissors"]
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const playerScoreView = document.getElementById('player-score')
const computerScoreView = document.getElementById('computer-score')
const message = document.getElementById('message')
let playerScore = 0
let computerScore = 0
let playerSelection = ''
let computerSelection = ''

rock.addEventListener('click', () => {
  playerSelection = 'rock'
  computerSelection = getComputerChoice()

  game()
})
paper.addEventListener('click', () => {
  playerSelection = 'rock'
  computerSelection = getComputerChoice()

  game()
})
scissors.addEventListener('click', () => {
  playerSelection = 'rock'
  computerSelection = getComputerChoice()

  game()
})

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'TIE!'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {

    computerScore++
    computerScoreView.innerHTML = computerScore

    return "You Lose! Paper beats Rock"
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {

    computerScore++
    computerScoreView.innerHTML = computerScore

    return "You Lose! Rock beats Scissors"
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {

    computerScore++
    computerScoreView.innerHTML = computerScore

    return "You Lose! Scissors beats Paper"
  } else {
    playerScore++
    playerScoreView.innerHTML = playerScore

    return "You win!"
  }
}

function game() {
  message.innerText = playRound(playerSelection, computerSelection)

  if (playerScore === 5) {
    message.innerText = '¡Congratulations! You win the game🏆'
    playerScore = 0
    computerScore = 0
    playerScoreView.innerText = playerScore
    computerScoreView.innerText = computerScore
  } else if (computerScore === 5) {
    message.innerText = 'Game Over\nbetter luck the next time☠️'
    playerScore = 0
    computerScore = 0
    playerScoreView.innerText = playerScore
    computerScoreView.innerText = computerScore
  }
}

