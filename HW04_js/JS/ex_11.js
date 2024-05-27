let arrayMatrix = [1, 2, 3, 5.4, 3.3];
let newNumber = Number(prompt('Введіть будь-яке число'));

function checkNumbers(array, number) {
    //додаємо введене число на початок масиву
    array.unshift(number);
    return array;
}

console.log(checkNumbers(arrayMatrix, newNumber));
