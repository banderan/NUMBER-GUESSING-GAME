const min = window.prompt("Enter the minimum value:");
const max = window.prompt("Enter the maximum value:");

let randNum = Math.round(Math.random() * (max - min) + min);
let guess;
let attempts = 0;

while (guess != randNum) {
    guess = window.prompt(`Guess a number between ${min} and ${max}:`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
        continue;
    }
    attempts++;


    if (guess < min || guess > max) {
        window.alert(`Please enter a number between ${min} and ${max}.`);
    }
    else if (guess < randNum) {
        window.alert("Too low!");
    }
    else if (guess > randNum) {
        window.alert("Too high!");
    }
    else {
        window.alert(`Congratulations! You guessed the number ${randNum} in ${attempts} attempts.`);
    }
}