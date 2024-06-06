let num1=20;
let num2=3;
//функція, що приймає два значення: число і показник ступеня. За допомогою Math.pow робимо матем.дію
function getPowerNumber(num1, num2) {
    return  Math.pow(num1, num2);
}
//викливаємо функцію і виводимо результат
let result = getPowerNumber(num1, num2);
console.log(result);
