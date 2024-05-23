//задаємо змінні числову і суми
let counter = 0;
let sum = 0;

//додаємо всі парні числа в діапазоні від 0 до 20(включно)
do {
    if (counter % 2 === 0) {
        sum += counter;
    }
    counter++;

} while (counter <= 20);

//виводимо результат

console.log(`${sum}`);