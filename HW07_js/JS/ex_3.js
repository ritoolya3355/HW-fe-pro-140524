// Функція, яка генерує випадкове дробове число від 0 до 1
function getRandomNumber() {
    return Math.random();
}
// Викликаємо функцію getRandomNumber і множимо результат на 100 для отримання числа від 0 до 100
let mathRandomNumber = getRandomNumber() * 100;
console.log(`Random number (0-100): ${mathRandomNumber}`);

// Округлюємо випадкове число вниз до найближчого цілого
let mathFloorNumber = Math.floor(mathRandomNumber);
console.log(`Rounded down number: ${mathFloorNumber}`);


// Округлюємо випадкове число вверх до найближчого цілого
let mathCeilNumber = Math.ceil(mathRandomNumber);
console.log(`Rounded up number: ${mathCeilNumber}`);

// Округлюємо випадкове число до найближчого цілого
let mathRoundNumber = Math.round(mathRandomNumber);
console.log(`Rounded number: ${mathRoundNumber}`);