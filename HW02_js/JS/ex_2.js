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


//Варіант 2

/*let userNumber = (prompt ('Type number'));

if (userNumber%2 === 0) {
console.log ('Парне число');
} else {
    console.log ('Непарне число');
}
*/
