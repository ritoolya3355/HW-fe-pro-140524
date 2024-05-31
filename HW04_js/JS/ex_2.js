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

//варіант розібраний на уроці

function powerValue (number, exponent){
    let result =1;
    for (let i=0; i<exponent; i++){
        result*=number;
    }
    return result;
}
console.log(`2 in 3 ${powerValue(2,3)}`);