let numbersArr = [20, 22, 54, 55, 18, 31, 14, 97];
//за допомогою map підносимо кожен елемент до квадрата
let mapNumbersArr = numbersArr.map (number => number**2);
//виводимо новий масив з квадратами чисел
console.log (mapNumbersArr);


// Функція-перетворювач для додавання рядка до числа
function mapperAddString(number) {
    return 'Price ' + number + ' $';
}

// Функція, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву
function mapArrayWithTransformer(array, transformer) {
    return array.map(transformer);
}

// Використовуємо функцію mapArrayWithTransformer для створення нового масиву
let transformedArray = mapArrayWithTransformer(numbersArr, mapperAddString);

console.log(transformedArray);