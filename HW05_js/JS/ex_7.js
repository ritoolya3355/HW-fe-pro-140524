let numbersArr = [20, 22, 54, 55, 18, 31, 14, 97];

//функція, що числа мають бути парні
function selectEven(number) {
    return number % 2 === 0;
    }
// функція, що множить на 2
function doubleNumber (number) {
    return number*2;
}
//функція, що фільтрує
function filterArray(array, condition) {
    return array.filter(condition);
}

//функція, що створить новий трансформований масив
function mapArray(array, transformer) {
    return array.map(transformer);
}

//фільтруємо масив за допомогою функції filterArray і в ній функція-умова selectEven, що обирає парні числа
let evenNumbers = filterArray(numbersArr, selectEven);
//для перевірки виводимо створений масив
console.log(evenNumbers);

//цей масив множимо на 2 і сворюємо новий newArr - за допомогою функції mapArray і в ній функція-умова doubleNumber

let newArr = mapArray (evenNumbers, doubleNumber);

console.log(newArr);


//варіант в класі

function filterAndMultiply (arr) {
    return arr.filter (num=>num%2 === 0).map (num=>num82);
   }
   console.log (filterAndMultiply([1,2,3,4,5,6]));

    
