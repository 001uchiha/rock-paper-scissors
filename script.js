let computerScore = 0;
let humanScore = 0;

let humanScoreSpan = document.getElementById("humanScore");
let computerScoreSpan = document.getElementById("computerScore");
const buttons = document.querySelectorAll(".choice");
let resultDiv = document.getElementById("result");
let msg = document.getElementById("result-msg");
let finalResult = document.getElementById("finalResult");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    msg.textContent = `You both chose ${humanChoice}`;
    return "It's a tie!";
  } 
  
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    msg.textContent = `${humanChoice} beats ${computerChoice}.`;
    return `You win!`;
  } else {
    computerScore++;
    msg.textContent = ` ${computerChoice} beats ${humanChoice}.`;
    return `You lose!`;
  }
}

function updateScore() {
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
}

function checkWinner() {
  if (computerScore == 5 || humanScore == 5) {
    showGameOverPopup();
  
    if (humanScore > computerScore) {
      finalResult.textContent = "🎉 You Won!";
      finalResult.style.color = "#0077ff";
    } else{
      finalResult.textContent = "💀 You lost!";
      finalResult.style.color = "#ff4d4f";
    }
  }  
}

function showGameOverPopup() {
	// Fade out game

	document.getElementById("gameContainer").classList.add("fade-out");

	// Show popup after short delay (so fade is visible)
	setTimeout(() => {
		document.getElementById("gameOverPopup").classList.remove("hidden"); 	
	}, 500);	
}

function restartGame() { 
	// Hide the popup
  	document.getElementById("gameOverPopup").classList.add("hidden");
  	// Realod the page to start over
  	window.location.replace(window.location.href);
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const humanSelection = button.dataset.choice;
    const computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    resultDiv.textContent = result;
    updateScore();
    checkWinner();
  })
})
