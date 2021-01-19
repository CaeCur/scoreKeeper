const p1 = {
	score  : document.querySelector("#p1Score"),
	button : document.querySelector("#p1Increase")
};
const p2 = {
	score  : document.querySelector("#p2Score"),
	button : document.querySelector("#p2Increase")
};
// const p1Score = document.querySelector("#p1Score");
// const p2Score = document.querySelector("#p2Score");
// const p1IncreaseButton = document.querySelector("#p1Increase");
// const p2IncreaseButton = document.querySelector("#p2Increase");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#roundsSelect");

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

// Functions //
function resetGame () {
	p1.score.textContent = 0;
	p1.score.classList.remove("has-text-success", "has-text-danger");
	p2.score.textContent = 0;
	p2.score.classList.remove("has-text-success", "has-text-danger");
	isGameOver = false;
	p1.button.disabled = false;
	p2.button.disabled = false;
}

function incrementScore (playerNumber, opponentNumber) {
	const currentScore = parseInt(playerNumber.textContent);

	if (!isGameOver) {
		let newScore = currentScore + 1;
		if (newScore === winningScore) {
			isGameOver = true;
			playerNumber.classList.add("has-text-success");
			opponentNumber.classList.add("has-text-danger");
			p1.button.disabled = true;
			p2.button.disabled = true;
		}
		playerNumber.textContent = newScore;
	}
}
// Functions End //

// Score Increments //
p1.button.addEventListener("click", function () {
	incrementScore(p1.score, p2.score);
});

p2.button.addEventListener("click", function () {
	incrementScore(p2.score, p1.score);
});
// Score Increments End //

resetButton.addEventListener("click", resetGame);

winningScoreSelect.addEventListener("change", function () {
	winningScore = parseInt(this.value);
	resetGame();
});
