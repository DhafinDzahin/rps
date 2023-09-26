var playerWeapon, computerWeapon, playerScore, computerScore, options;

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

function getComputerWeapon() {
	options = ["rock", "paper", "scissor"];
	return options[Math.floor(Math.random() * options.length)];
}

function game() {
	playerScore = 0;
	computerScore = 0;
	while (playerScore < 3 && computerScore < 3) {
		playerWeapon = prompt("Choose a weapon ('rock' 'paper' 'scissor')").toLowerCase();
		computerWeapon = getComputerWeapon()
		console.log(checkWinner(playerWeapon, computerWeapon));
		console.log(`Player choose ${playerWeapon}`);
		console.log(`Computer choose ${computerWeapon}`);
		console.log(`Player score: ${playerScore} computer score: ${computerScore}`);
	}
	if (playerScore === 3) return 'Player is the game winner';
	return 'Computer is the game winner';
}
console.log('first to three win');
console.log(game());
