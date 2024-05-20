
let rock = 0;
let scissors = 1;
let paper = 2;

let userChoice = parseInt(prompt("Введіть число 0, 1 або 2. Де 0 - камінь, 1 - ножиці, 2 - папір"));

// перевірка правильності вводу числа (!== не відповідає заданим змінним)
if (userChoice !== rock && userChoice !== scissors && userChoice !== paper) {
    console.log("Невірний вибір. Будь ласка, введіть 0, 1 або 2");
    //якщо все вірно, то вибір комп’ютера
} else {
    /*Math.random() - повертає випадкове число від 0 включно; 
    Math.random()використовується з Math.floor() для повернення випадкових цілих чисел.
    *3 - в даному випадку від 0 до 2 ( *6 - від 0 до 5 і т.п.) */
    let computerChoice = Math.floor(Math.random() * 3);

    //виводимо введені дані
    console.log(`0 - камінь, 1 - ножиці, 2 - папір`);
    console.log(`Ви обрали: ${userChoice}`);
    console.log(`Комп'ютер обрав: ${computerChoice}`);

    //виводимо результат

    if (userChoice === computerChoice) {
        console.log("Нічия!");
    } else if ((userChoice === rock && computerChoice === scissors) ||
        (userChoice === scissors && computerChoice === paper) ||
        (userChoice === paper && computerChoice === rock)) {
        console.log("Вітаю! Ви виграли!");
    } else {
        console.log("Ви програли! Випробуйте удачу знову!");
    }
}



