function getHumanChoice () {
    const choice = prompt("Pick: rock, paper, scissors!");
    return choice;
}

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 10)
    console.log(randomNumber);
    if (randomNumber % 3 == 1) {
        return "rock";
    } else if (randomNumber % 3 == 2) {
        return "paper";
    }
    return "scissors";
}