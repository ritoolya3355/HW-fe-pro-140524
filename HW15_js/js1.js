window.onload = function() {

    let number = 1.4;

    // Перший Promise: додає 2 до вхідного числа
    let firstPromise = new Promise(function(resolve, reject) {
        if (typeof number !== 'number') { // Перевірка, чи вхідний параметр є числом
            reject('It is not a number'); // Відхилення Promise з повідомленням про помилку
        } else {
            let result = number + 2; // Додавання 2 до числа
            alert(`${number} + 2 = ${result}`); // Виведення результату
            resolve(result); // Виконання Promise з передачею результату
        }
    });

    // Другий Promise: множить результат першого Promise на 2
    let secondPromise = firstPromise.then(function(result) {
        result = result * 2; // Множення результату на 2
        alert(`second result ${result}`); // Виведення результату
        return result; // Повернення результату для наступного then
    });

    // Третій Promise: віднімає 10 від результату другого Promise
    secondPromise.then(function(result) {
        result = result - 10; // Віднімання 10 від результату
        alert(`third result ${result}`); // Виведення результату
        return result; // Повернення результату
    }).catch(function(error) {
        alert(`Error: ${error}`); // Обробка помилок
    });
};
