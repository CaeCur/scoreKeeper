const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1IncreaseButton = document.querySelector("#p1Increase");
const p2IncreaseButton = document.querySelector("#p2Increase");
const resetButton = document.querySelector("#reset");

let winningScore = 5;
let isGameOver = false;

p1IncreaseButton.addEventListener("click", function () {
	const currentScore = parseInt(p1Score.textContent);

	if (!isGameOver) {
		let newScore = currentScore + 1;
		if (newScore === winningScore) {
			isGameOver = true;
		}
		p1Score.textContent = newScore;
	}
});

p2IncreaseButton.addEventListener("click", function () {
	const currentScore = parseInt(p2Score.textContent);

	if (!isGameOver) {
		let newScore = currentScore + 1;
		if (newScore === winningScore) {
			isGameOver = true;
		}
		p2Score.textContent = newScore;
	}
});

resetButton.addEventListener("click", function () {
	p1Score.textContent = 0;
	p2Score.textContent = 0;
	isGameOver = false;
});
