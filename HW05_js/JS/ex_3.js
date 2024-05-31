//створюємо 2 масиви
let animalsArr = ['dog', 'cat', 'lion', 'tiger', 'sheep', 'cow'];
let birdsArr = ['eagle', 'falcon', 'seagull', 'rooster', 'turkey'];
//використаємо метод concat, що додать другий масив до першого
animalsArr = animalsArr.concat(birdsArr);
//змінений масив animalsArr буде вже з птахами
console.log (`Animals+birds: ${animalsArr}`);

//створимо функцію, що використає concat
let insectsArr = ['butterfly', 'fly', 'mosquito']
let concatPetsArr = animalsArr.concat(insectsArr);

//новий масив 
console.log (`Animals+birds+insects: ${concatPetsArr}`);