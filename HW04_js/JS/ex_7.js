//shift - видалення елементів з початку масиву на пряму і через функцію 

//оголошуємо масив
let matrix = [12,13,14,15,16,17,18,19,20];
console.log(matrix);
// за допомогою shift на пряму видаляємо дані з початку масиву
matrix.shift();

console.log(matrix);

//оголошуємо функцію minusMatrix
function minusMatrix(array, number) {
    //видаляємо дані з кінця
    array.shift(number);
}
//викликаємо функцію, щоб видалити дані
minusMatrix(matrix);
minusMatrix(matrix);
minusMatrix(matrix);

console.log(matrix);
