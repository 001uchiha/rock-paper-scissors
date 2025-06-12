function getRandomChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)].toLowerCase();
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissor"];
	return getRandomChoice(choices);
}

function getHumanChoice(n) {
	const userChoice = prompt(`Round ${n}: Enter your choice: (Rock, Paper, Scissor) `);
	return userChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
const roundCount = 5;


function playGame() {
	
	for (let i = 1; i <= roundCount; i++) {
		const humanSelection = getHumanChoice(i);
		const computerSelection = getComputerChoice()

		let result = playRound(humanSelection, computerSelection);
		console.log(`You chose ${humanSelection}`);
		console.log(`Computer chose ${computerSelection}`);
		console.log(result);


		if (result.startsWith('You Win')) humanScore++;
		else if (result.startsWith('You lose')) computerScore++;

		console.log(`Score: You ${humanScore} - ${computerScore} Computer\n`);
	}


	function playRound(humanChoice, computerChoice) {
		if (humanChoice === computerChoice) {
			return `It's a tie! You both chose ${capitalize(humanChoice)}.`;
		}
		else if (
			(humanChoice === 'rock' && computerChoice === 'scissor') || 
			(humanChoice === 'scissor' && computerChoice === 'paper') ||
			(humanChoice === 'paper' && computerChoice === 'rock')
			) {
			 return `You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
		}
		else {
			return `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
		}
	}

	if (humanScore > computerScore) {
	   console.log("🏆 You won the game!");
	} else if (computerScore > humanScore) {
	   console.log("💀  You lost the game.");
	} else {
	   console.log("🤝 The game is a tie!");
	}

}

playGame();
