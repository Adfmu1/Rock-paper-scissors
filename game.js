playGame();

function playGame () {
    //init scores and round number
    let computerScore = 0;
    let playerScore = 0;
    let roundNumber = 0;

    //play game
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    roundNumber++;

    //declare a player
    if (playerScore > computerScore) {
        console.log("Player Wins the game!")
    }
    else {
        console.log("Computer Wins the game!")
    }
    
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

    //play round
    function playRound (humanChoice, computerChoice) {
        //make human input readable
        const humanSelection = humanChoice.trim().toLowerCase();

        //declare round winner
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
        //display current score for human and computer
        console.log(`Current score is: Computer: ${computerScore}, Human: ${playerScore}`)
    }
}