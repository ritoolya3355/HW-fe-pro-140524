//створюємо масив
let animalsArr = ['dog', 'cat', 'lion', 'tiger', 'sheep', 'cow'];
//видаляємо хижаків з середини масиву, вказуючи старт [i]=2 і кількість елементів - 2 ('lion', 'tiger')
animalsArr.splice (2,2);
//виводимо скоригований масив
console.log(`Domestic animals: ${animalsArr}`);

//створимо новий масив petArr і функцію, що видалить улюбленців з масиву animalsArr і запише в новий  petsArr
let petsArr = animalsArr.splice (0,2);
//виводимо отриманий масив
console.log (`Our pets: ${petsArr}`);
