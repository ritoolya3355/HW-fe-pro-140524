let numbersArr = [21, 22, 54, 55, 18, 31, 14, 97];
//відфільтровуємо непарні числа
let oddNumbersArr = numbersArr.filter (number => number%2!==0);
//виводимо новий масив з непарними числами
console.log (oddNumbersArr);


//функція filterArray приймає два параметри:
//array - масив, який потрібно відфільтрувати
//condition - функція-умова, яка перевіряє кожен елемент масиву

function filterArray(array, condition) {
    return array.filter(condition);
}
//функція-умова(condition) selectOdd, що числа мають бути непарні
function selectOdd(number) {
    return number % 2 !== 0;
}

//сворюємо новий масив, який за допомогою функції filterArray візьме з numbersArr за умови isOdd непарні цифри
let oddNumbersFromFunction = filterArray(numbersArr, selectOdd);
//виводимо новий масив з непарними числами
console.log(oddNumbersFromFunction); 

//в цьому завданні трохи заплуталась з функціями
//важко придумувати назви, можливо є якісь рекомендації, бо коли це 1-2 функції це одне, а коли їх багато і не тільки функції...
