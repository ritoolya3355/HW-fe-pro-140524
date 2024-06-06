let userBirthYear = prompt ('Введіть рік свого народження');
userBirthYear = Number(userBirthYear); // перетворення рядка у число
const currentYear = new Date().getFullYear(); // отримання поточного року
// new Date() - конструктор, що створює новий об'єкт Date з поточною датою та часом
// .getFullYear() - метод об'єкта Date, що повертає поточний рік
const userAge = currentYear - userBirthYear; // обчислення віку користувача
console.log(`Рік Вашого народження: ${userBirthYear}`);
console.log(`Ваш вік: ${userAge}`);

//трохи переплутала завдання

let newUserAge = prompt ('Введіть Ваш вік');
newUserAge = Number(newUserAge);
const newCurrentYear = new Date().getFullYear();
const newUserBirthYear = newCurrentYear - newUserAge;
console.log(`Рік Вашого народження: ${newUserBirthYear}`);


//приклад вирішення з уроку

/*function getYearOfBirth (age) {
    let currentYear = new Date ().getFullYear();
    return currentYear - age;
}
console.log (`Year of Birth ${getYearOfBirth(30)}`);
*/