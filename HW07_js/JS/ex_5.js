//рядок
let animals = 'dog cat sheep cow mouse rabbit';
//перетворюємо на масив по пробілу
let animalsArr = animals.split(' ');
//виводимо для порівняння даний рядок і 
console.log(animals);
//отриманий масив великии літерами, використовуючи toUpperCase(animalsArr) 
console.log(animals.toUpperCase(animalsArr));



/* в класі:
let animals = 'dog cat sheep cow mouse rabbit';
let animalsArr = animals.split(' ');
let upperCaseArr = animalsArr.map(word =>word.toUpperCase());
console.log(animalsArr);
console.log(upperCaseArr);
*/