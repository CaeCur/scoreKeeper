const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1IncreaseButton = document.querySelector("#p1Increase");
const p2IncreaseButton = document.querySelector("#p2Increase");
const resetButton = document.querySelector("#reset");

p1IncreaseButton.addEventListener("click", function () {
	const currentScore = parseInt(p1Score.innerText);
	const newScore = currentScore + 1;
	p1Score.innerText = newScore;
});

p2IncreaseButton.addEventListener("click", function () {
	const currentScore = parseInt(p2Score.innerText);
	const newScore = currentScore + 1;
	p2Score.innerText = newScore;
});

resetButton.addEventListener("click", function () {
	p1Score.innerText = 0;
	p2Score.innerText = 0;
});
