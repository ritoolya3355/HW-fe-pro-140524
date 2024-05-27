//pop - видалення елементів з кінця масиву на пряму і через функцію 

//оголошуємо масив
let matrix = [12,13,14,15,16,17,18,19,20];
console.log(matrix);
// за допомогою pop на пряму видаляємо дані з кінця масиву
matrix.pop();

console.log(matrix);

//оголошуємо функцію minusMatrix
function minusMatrix(array, number) {
    //видаляємо дані з кінця
    array.pop(number);
}
//викликаємо функцію, щоб видалити дані
minusMatrix(matrix);
minusMatrix(matrix);//декілька разів, щоб зрозуміти, як працює
minusMatrix(matrix);

console.log(matrix);
