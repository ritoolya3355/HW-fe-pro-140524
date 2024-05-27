//push - додавання елементів в кінець масиву на пряму і через функцію 

//оголошуємо порожній масив
let matrix = [];
// за допомогою push на пряму додаємо в кінець масиву дані
matrix.push(12);
matrix.push(13);
matrix.push(14);
matrix.push(15);
matrix.push(16);

console.log(matrix);

//оголошуємо функцію plusMatrix
function plusMatrix(array, number) {
    //додаємо дані
    array.push(number);
}
//викликаємо функцію і задаємо дані, що додаються
plusMatrix(matrix, 17);
plusMatrix(matrix, 18);
plusMatrix(matrix, 19);

console.log(matrix);

