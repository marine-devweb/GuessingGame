let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
    attempts--;
    const inputElement = document.getElementById("guess");
    const feedbackElement = document.getElementById("feedback");
    const guess = inputElement.value;

    while (attempts > 0) {
        if (guess == randomNumber) {
            attempts = 0;
            feedbackElement.innerHTML = "Félicitations !";
            feedbackElement.style.color = "green";
            break;
        } else if (guess < randomNumber) {
            feedbackElement.innerHTML = `Trop bas ! Essayez encore. Il vous reste ${attempts} tentatives.`;
            feedbackElement.style.color = "red";
            break;
        } else {
            feedbackElement.innerHTML = `Désolé, vous avez épuisé toutes vos tentatives ! Le nombre correct était ${randomNumber}`;
            feedbackElement.style.color = "red";
            break;
        }
    }

    if (attempts === 0 && guess != randomNumber) {
        feedbackElement.innerHTML = `Désolé, vous avez épuisé toutes vos tentatives ! Le nombre correct était <span style="font-weight: bold"> ${randomNumber}`;
        feedbackElement.style.color = "red";
    }
}