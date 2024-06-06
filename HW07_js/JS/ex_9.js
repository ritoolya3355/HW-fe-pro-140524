

// Функція, що генерує випадкове число від min до max (включно з обома кінцями діапазону)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //(max - min + 1) визначає кількість можливих значень, які ми хочемо отримати
    //Множення на (max - min + 1) масштабує випадкове число так, щоб воно було в діапазоні від 0 до (max - min + 1)
}

// Функція, що створює випадковий масив чисел від min до max
function getRandomArr(length, min, max) {
    // Створюємо масив з початковим значенням min і використовуємо множину для перевірки унікальності
    let randomArray = [min];
    //тут мені з унікальними числами допомогла дочка, а саме з ідеєю масива з використаних чисел
    let usedNumbers = new Set([min, max]); // Масив для зберігання вже використаних чисел

    // Заповнюємо масив випадковими унікальними числами
    while (randomArray.length < length - 1) {
        let randomNumber = getRandomNumber(min, max);
        // Перевіряємо, чи випадкове число є унікальним
        //якщо воно не використане !usedNumbers.has(randomNumber)
        if (!usedNumbers.has(randomNumber)) {
            //додаємо до створюваного масиву
            randomArray.push(randomNumber);
            //і додаємо число до масиву використаних чисел
            usedNumbers.add(randomNumber);
        }
    }
    // Додаємо max до кінця масиву
    randomArray.push(max);
    return randomArray;
}

let min = 20;
let max = 80;
let length = 16;

let randomArray = getRandomArr(length, min, max);
console.log(randomArray);

//заміть качки розмовляю з комп’ютером, з цією задачею він довго мене слухав :)
//наче розібралася, але коли багато функцій плутаюся з аргументами і порядком,  що куди застосовувати, тому багато пишу коментів