
let animalsArr = ['dog', 'cat', 'lion', 'tiger', 'sheep', 'cow'];

//використаємо метод includes, щоб знайти lion

console.log (`Looking for a lion: ${animalsArr.includes('lion')}`);

//створимо функцію, що використає includes

let lookingForTiger = animalsArr.includes('tiger');
console.log (`Looking for a tiger: ${lookingForTiger}`);
//пошукаємо birds
let lookingForBirds = animalsArr.includes('birds');
console.log (`Looking for a birds: ${lookingForBirds}`);
