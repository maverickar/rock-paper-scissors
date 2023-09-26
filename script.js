function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)]; 
}

function getPlayerChoice() {
    return prompt("Please select Rock, Paper or Scissors.").toLowerCase();
}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    if (playerSelection === computerSelection) {
        console.log("Shit, the PC and you had the same idea");
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
               (playerSelection === "scissors" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "rock")) {
                    console.log("You won! The computer chose " + computerSelection);
                 } else {
                    console.log("You lost. You chose " + playerSelection + " and the computer chose " + computerSelection);
                 }
    
    console.log("player " + playerSelection, "comp " + computerSelection);
}

playRound();


