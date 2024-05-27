//оголошуємо змінні
let a = 6;
let b = 3;

//Функція power приймає два параметри (a і b), обчислює a в степені b і повертає результат

function power (a,b) {
    let result = a**b;
    return result;
}
//Викликаємо функцію power(a, b) всередині console.log, щоб вивести результат обчислення
console.log(`${a} ^ ${b} = ${power(a,b)}`);

//стрілковий варіант 

let shortPower = (a,b) =>  a**b;
console.log (`${a} ^ ${b} = ${shortPower(a,b)}`);

