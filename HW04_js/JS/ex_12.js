let arrayMatrix = [1, 12, 3, 5, 8];
//приймаємо перше число в масиві за найбільше для подальшого порівняння
let maxNumber = arrayMatrix[0];

//створюємо функцію, що буде шукати найбільше число в масиві
function findMaxNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) { //поставила після дужок ; і не могла зрозуміти що не працює :)
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

console.log(findMaxNumber(arrayMatrix));

//наче все зробила, але кожне завдання займає багатенько часу часто через дрібниці
//ось де - на помилках вчишся ;)
