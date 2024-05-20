// Запит у користувача трьох чисел, використовуємо parseFloat ( parseInt для цілих чисел) для перетворення введеного на числа
let number1 = parseFloat(prompt("Введіть перше число:"));
let number2 = parseFloat(prompt("Введіть друге число:"));
let number3 = parseFloat(prompt("Введіть третє число:"));



// Знаходимо найбільше число
let maxNum = number1;

if (number2 > maxNum) {
    maxNum = number2;
}
//якщо додаю else не завжди працює правильно
if (number3 > maxNum) {
    maxNum = number3;
}

// Виводимо результат у консоль
console.log (`Ви ввели ${number1}, ${number2}, ${number3}`);
console.log (`Найбільше число: ${maxNum}`);