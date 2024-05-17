//select buttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//listener for each button
rockButton.addEventListener( "click", () => {
    playRound(rockButton.textContent, getComputerChoice());
} );

paperButton.addEventListener( "click", () => {
    playRound(paperButton.textContent, getComputerChoice());
} );

scissorsButton.addEventListener( "click", () => {
    playRound(scissorsButton.textContent, getComputerChoice());
} );

//select score display and result of a round
const computerScoreDisplay = document.querySelector("#computer-score");
const playerScoreDisplay = document.querySelector("#player-score");
const roundResult = document.querySelector("#result");

computerScoreDisplay.textContent = "Computer: 0";
playerScoreDisplay.textContent = "Player: 0";

//init scores and round number
let computerScore = 0;
let playerScore = 0;
let roundNumber = 0;

let gameIsOn = true;

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber % 3 == 1) {
        return "rock";
    } else if (randomNumber % 3 == 2) {
        return "paper";
    }
    return "scissors";
}

//play round
function playRound (humanChoice, computerChoice) {

    //check if game is still on
    if (!gameIsOn) {
        return ;
    }

    const humanSelection = humanChoice.toLowerCase();

    //declare round winner
    if (humanSelection === computerChoice) {
        roundResult.textContent = "Its a draw!";
    }
    else if ((humanSelection === "rock" && computerChoice === "scissors") || 
            (humanSelection === "scissors" && computerChoice === "paper") || 
            (humanSelection === "paper" && computerChoice === "rock")) {
        roundResult.textContent = `You win! ${humanSelection} beats ${computerChoice}`;
        playerScore++;
    }
    else {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanSelection}`;
        computerScore++;
    }
    //display current score for human and computer
    computerScoreDisplay.textContent = `Computer ${computerScore}`;
    playerScoreDisplay.textContent = `Player ${playerScore}`;
    
    //declare a winner of a game and end the game
    if (playerScore > computerScore && playerScore >= 5) {
        roundResult.textContent = "Player Wins the game!";
        roundResult.style.backgroundColor = "red";
        gameIsOn = false;
    }
    else if (playerScore < computerScore && computerScore >= 5) {
        roundResult.textContent = "Computer Wins the game!";
        roundResult.style.backgroundColor = "red";
        gameIsOn = false;
    }
}
