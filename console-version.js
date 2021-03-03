function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "Rock"
    } else if (computerChoice === 1) {
        return "Paper"
    } else if (computerChoice === 2) {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Draw. Both players chose Rock"
        } else if (computerSelection ==="paper") {
            return "You Lose! Paper beats Rock"
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock"
        } else if (computerSelection ==="paper") {
            return "Draw. Both players chose Paper"
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection ==="paper") {
            return "You Win! Scissors beats Paper"
        } else if (computerSelection === "scissors") {
            return "Draw. Both players chose Scissors"
        }
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (i = 0; i < 5; i++) {
        let playerChoice
        while (true) {
            playerChoice = prompt("Rock, Paper, or Scissors?")
            playerChoice = playerChoice.toLowerCase()
            if (
                playerChoice === "rock" ||
                playerChoice === "paper" ||
                playerChoice === "scissors"
            ) {
                break
            } else {
                alert("Invalid response")
            }
        }
        outcome = playRound(playerChoice, computerPlay())
        if (outcome.substring(0,5) === "You W") {
            playerScore++
        } else if (outcome.substring(0,5) === "You L") {
            computerScore++
        }
        console.log(outcome)
    }
    console.log(
        "Final score: Player " + playerScore + ", Computer " + computerScore
    )
    if (playerScore > computerScore) {
        console.log("Player wins!")
    } else if (playerScore < computerScore) {
        console.log("Computer wins!")
    } else {
        console.log("Draw.")
    }
}

game()