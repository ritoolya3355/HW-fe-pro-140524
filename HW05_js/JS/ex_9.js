let numbersArr = [2, 22, 5, 55, 18, 3, 14, 97];
function filterAndLimitArray(array) {
    function checkValue(value) {
        return value >= 10;
    }
    // Фільтруємо числа, що більше або рівні 10
    let filteredArray = array.filter(checkValue);
    // Повертаємо новий масив, що містить перші три елементи результату
    return filteredArray.slice(0, 3);
}
let resultArray = filterAndLimitArray(numbersArr);
console.log(resultArray);

//ще важко все запам’ятати, плутаюсь у назвах. Думаю з практикою все стане на свої місця