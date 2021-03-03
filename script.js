function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else if (computerChoice === 2) {
        return "Scissors";
    }
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Draw. Both players chose Rock";
        } else if (computerSelection ==="paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection ==="paper") {
            return "Draw. Both players chose Paper";
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection ==="paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "scissors") {
            return "Draw. Both players chose Scissors";
        }
    }
};

const result = document.getElementById('result');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
let playerPoints = 0;
let computerPoints = 0;

function postScores() {
    playerScore.innerHTML = playerPoints;
    computerScore.innerHTML = computerPoints;
}

function play() {
    if (playerPoints === 5 || computerPoints === 5) {
        playerPoints = 0;
        computerPoints = 0;
    }
    let round = playRound(this.innerHTML, computerPlay());
    if (round[4] === 'W') {
        playerPoints += 1;  
    } else if (round[4] === 'L') {
        computerPoints += 1;
    }
    postScores();
    if (playerPoints === 5) {
        result.innerHTML = "Player has won five games. You win!"
    } else if (computerPoints === 5) {
        result.innerHTML = "Computer has won five games. You lose!"
    } else {
        result.innerHTML = round;
    }
};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', play));