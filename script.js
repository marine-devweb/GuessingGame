let randomNumber = Math.floor(Math.random() * 2) + 1;

function checkGuess() {
    const inputElement = document.getElementById("guess");
    const feedbackElement = document.getElementById("guess");
    const guess = inputElement.value;

    if (guess == randomNumber) {
    feedbackElement.style.color = "green";
    } else if (guess < randomNumber) {
    feedbackElement.style.color = "red";
    } else {
    feedbackElement.style.color = "red";
    }
}