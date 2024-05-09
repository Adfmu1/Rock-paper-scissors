let computerScore = 0;
let playerScore = 0;

function getHumanChoice () {
    const choice = prompt("Pick: rock, paper, scissors!");
    return choice;
}

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber % 3 == 1) {
        return "rock";
    } else if (randomNumber % 3 == 2) {
        return "paper";
    }
    return "scissors";
}

function playRound (humanChoice, computerChoice) {
    const humanSelection = humanChoice.trim().toLowerCase();

    if (humanSelection === computerChoice) {
        console.log("Its a draw!");
    }
    else if ((humanSelection === "rock" && computerChoice === "scissors") || 
             (humanSelection === "scissors" && computerChoice === "paper") || 
             (humanSelection === "paper" && computerChoice === "rock")) {
        console.log(`You win! ${humanSelection} beats ${computerChoice}`);
        playerScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanSelection}`);
        computerScore++;
    }
    console.log(`Current score is: Computer: ${computerScore}, Player: ${playerScore}`)
}