var playerWeapon, computerWeapon, playerScore, computerScore;

function checkWinner(playerWeapon, computerWeapon) {
	if (playerWeapon === computerWeapon) {
		console.log('draw');
		return result = {
			'player': playerWeapon,
			'computer': computerWeapon
		};
	};
	if (
		playerWeapon === "paper" && computerWeapon === "rock" ||
		playerWeapon === "rock" && computerWeapon === "scissor" ||
		playerWeapon === "scissor" && computerWeapon === "paper"
	) {
		playerScore += 1;
		console.log("Player win");
		return {
			'player': playerWeapon,
			'computer': computerWeapon + '-lose'
		};
	}
	computerScore += 1;
	console.log("Computer win");
	return {
		'player': playerWeapon + '-lose',
		'computer': computerWeapon
	};
}


function game(playerWeapon) {
	// playerWeapon = prompt("Choose a weapon ('rock' 'paper' 'scissor')").toLowerCase();
	computerWeapon = options[Math.floor(Math.random() * options.length)];

	let result = checkWinner(playerWeapon, computerWeapon);
	playerPick.src = `./image/${playerWeapon}/${result.player}.jpg`;
	computerPick.src = `./image/${computerWeapon}/${result.computer}.jpg`;

	// console.log(`Player choose ${playerWeapon}`);
	// console.log(`Computer choose ${computerWeapon}`);
	console.log(`Player score: ${playerScore} computer score: ${computerScore}`);
	if (playerScore === 3) {
		console.log('Player is the game winner');
		restart();
	}
	else if (computerScore === 3) {
		console.log('Computer is the game winner');
		restart();
	}
}

function restart() {
	playerScore = 0;
	computerScore = 0;
}

playerScore = 0;
computerScore = 0;
const options = ["rock", "paper", "scissor"];
// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissor = document.getElementById("scissor");
const playerPick = document.getElementById("playerPick");
const computerPick = document.getElementById("computerPick");
const option = [...document.getElementById("options").children]

console.log(option)
// rock.addEventListener('click', () => game('rock'));
// paper.addEventListener('click', () => game('paper'));
// scissor.addEventListener('click', () => game('scissor'));

option.forEach(element => {
	element.addEventListener('click', () => game(element.id))
});