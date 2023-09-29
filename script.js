const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const buttons = document.querySelectorAll(".button");
const result = document.querySelector(".result");
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    button.addEventListener("click", () => playerSelection = button.id);
    button.addEventListener("click", () => playRound(playerSelection));
})

function getComputerSelection() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)]; 
}

function disableButtons() {
    buttons.forEach(button => {button.disabled = true})
}

function checkWinner() {
    if(playerScore === 5) {
        result.textContent = "Game over. Player wins!"
        disableButtons();
    } else if(computerScore === 5) {
        result.textContent = "Game over. Computer wins!"
        disableButtons();
    }
}

function playRound(playerSelection) {
    result.textContent = "";
    computerSelection = getComputerSelection();
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
               (playerSelection === "scissors" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "rock")) {
                    playerScore++;
                    playerScoreElement.textContent = `Player: ${playerScore}`;
                    result.textContent = "You won!";
                 } else {
                    computerScore++;
                    computerScoreElement.textContent = `Computer: ${computerScore}`;
                    result.textContent = "You lost :(";
                 }
    
    console.log("player " + playerSelection, "comp " + computerSelection);

    checkWinner();

}
