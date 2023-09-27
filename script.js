var playerWeapon, computerWeapon, playerScore, computerScore;

function checkWinner(playerWeapon, computerWeapon) {
	if (playerWeapon === computerWeapon) return "Draw";
	if (
		playerWeapon === "paper" && computerWeapon === "rock" ||
		playerWeapon === "rock" && computerWeapon === "scissor" ||
		playerWeapon === "paper" && computerWeapon === "rock"
	) {
		playerScore += 1;
		return "Player win";
	}
	computerScore += 1;
	return "Computer win";
}


function game(playerWeapon) {
	// playerWeapon = prompt("Choose a weapon ('rock' 'paper' 'scissor')").toLowerCase();
	computerWeapon = options[Math.floor(Math.random() * options.length)];

	console.log(checkWinner(playerWeapon, computerWeapon));
	
	playerPick.src = `./image/${playerWeapon}/${playerWeapon}.jpg`
	computerPick.src = `./image/${computerWeapon}/${computerWeapon}.jpg`
	
	// console.log(`Player choose ${playerWeapon}`);
	// console.log(`Computer choose ${computerWeapon}`);
	console.log(`Player score: ${playerScore} computer score: ${computerScore}`);
	if (playerScore === 3) {
		console.log('Player is the game winner');
		restart();
	}
	else if (computerScore === 3) {
		console.log('Computer is the game winner');
		restart()
	}
}

function restart() {
	playerScore = 0;
	computerScore = 0;
}

playerScore = 0;
computerScore = 0;
const options = ["rock", "paper", "scissor"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const playerPick = document.getElementById("playerPick")
const computerPick = document.getElementById("computerPick")

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissor.addEventListener('click', () => game('scissor'));