//створюємо масив
let animalsArr = ['dog', 'cat', 'lion', 'tiger', 'sheep', 'cow'];
//використаємо метод reverce
animalsArr.reverse();
console.log (`Reverse array ${animalsArr}`);

//створимо функцію, що використає reverse

let revercePetsArr = animalsArr.reverse ();
//новий масив буде такий самий, як початковий, бо знову переверне масив
console.log (`Reverse array 2 ${revercePetsArr}`);