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
let attemps = 0

rock.addEventListener('click', () => {
  playerSelection = 'rock'
  computerSelection = getComputerChoice()

  message.innerText = playRound(playerSelection, computerSelection)
})
paper.addEventListener('click', () => {
  playerSelection = 'rock'
  computerSelection = getComputerChoice()

  message.innerText = playRound(playerSelection, computerSelection)
})
scissors.addEventListener('click', () => {
  playerSelection = 'rock'
  computerSelection = getComputerChoice()

  message.innerText = playRound(playerSelection, computerSelection)
})

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'TIE!'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {

    computerScoreView.innerHTML++

    return "You Lose! Paper beats Rock"
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {

    computerScoreView.innerHTML++

    return "You Lose! Rock beats Scissors"
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {

    computerScoreView.innerHTML++

    return "You Lose! Scissors beats Paper"
  } else {
    playerScoreView.innerHTML++

    return "You win!"
  }
}

function game() {
  let result = ''

  for (let i = 1; i <= 5; i++) {
    const computerSelection = getComputerChoice()
    result = playRound(playerSelection, computerSelection)

    console.log(`You choose ${playerSelection}, computer choose ${computerSelection}\n${result}`)
  }

  console.log(`Finish!\nResults:\n${playerScore}\n${computerScore}`)
}

