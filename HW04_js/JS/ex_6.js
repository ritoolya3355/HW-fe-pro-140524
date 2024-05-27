//unshift - додавання елементів на початок масиву на пряму і через функцію 

//оголошуємо порожній масив
let matrix = [];
// за допомогою push на пряму додаємо на початок масиву дані
matrix.unshift(12);
matrix.unshift(13);
matrix.unshift(14);
matrix.unshift(15);
matrix.unshift(16);

console.log(matrix);

//оголошуємо функцію plusMatrix
function plusMatrix(array, number) {
    //додаємо дані
    array.unshift(number);
}
//викликаємо функцію і задаємо дані, що додаються
plusMatrix(matrix, 17);
plusMatrix(matrix, 18);
plusMatrix(matrix, 19);

console.log(matrix);