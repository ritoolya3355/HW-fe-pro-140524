let arrayMatrix = [1, 2, 3, 5.4, 3.3];
let newNumber = Number(prompt('Введіть будь-яке число'));

function checkNumbers(array, number) {

//перевіряємо чи число є в масиві .includes (цього ще не вчили)
    if (array.includes(number)) {
    
    } else {
        array.push(number);
    }
    return array;
}

console.log(checkNumbers(arrayMatrix, newNumber));
