// Запит числа
let userNumber = prompt("Будь ласка, введіть будь-яке ціле число:");

// Перетворюємо введений текст на число
let number = parseInt(userNumber);

//порівнюємо і виводимо результат(різними способами)

if (number % 2 === 0) {
    console.log(`Число  ${number} - парне`);
} else {
    console.log("Число " + number + " - непарне");
}


