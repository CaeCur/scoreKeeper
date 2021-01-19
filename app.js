const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1IncreaseButton = document.querySelector("#p1Increase");
const p2IncreaseButton = document.querySelector("#p2Increase");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#roundsSelect");

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

// Functions //
function resetGame () {
	p1Score.textContent = 0;
	p1Score.classList.remove("has-text-success", "has-text-danger");
	p2Score.textContent = 0;
	p2Score.classList.remove("has-text-success", "has-text-danger");
	isGameOver = false;
}

function incrementScore (playerNumber, opponentNumber) {
	const currentScore = parseInt(playerNumber.textContent);

	if (!isGameOver) {
		let newScore = currentScore + 1;
		if (newScore === winningScore) {
			isGameOver = true;
			playerNumber.classList.add("has-text-success");
			opponentNumber.classList.add("has-text-danger");
		}
		playerNumber.textContent = newScore;
	}
}
// Functions End //

// Score Increments //
p1IncreaseButton.addEventListener("click", function () {
	incrementScore(p1Score, p2Score);
});

p2IncreaseButton.addEventListener("click", function () {
	incrementScore(p2Score, p1Score);
});
// Score Increments End //

resetButton.addEventListener("click", resetGame);

winningScoreSelect.addEventListener("change", function () {
	winningScore = parseInt(this.value);
	resetGame();
});
