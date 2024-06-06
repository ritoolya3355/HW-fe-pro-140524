let num1 = 80;
let num2 = 50;

//функція, що визначить за допомогою Math.min найменше число
function getSmallerNumber(num1, num2) {
    return  Math.min(num1, num2);
}
//звертаючись до функції виводимо результат
let minNumber = getSmallerNumber(num1, num2);
console.log(minNumber);

//стрілкова функція, що визначить за допомогою Math.max найбільше число
let getLagerNumber = (num1, num2) => Math.max(num1, num2);

//звертаючись до функції виводимо результат
let maxNumber = getLagerNumber(num1, num2);
console.log(maxNumber); 