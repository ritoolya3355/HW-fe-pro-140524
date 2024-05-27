//fill - заповненя/заміна певних ділянок масиву статичними значеннями

let fillArray = ['one', 'two','', 'four', 'five', ''];
console.log(fillArray);
//заповнюємо дані, яких не вистачає за координатами start-2, end - 3(не включно)
fillArray.fill('three',2,3);
console.log(fillArray);

//функція fillFunction приймає масив, значення та індекси у вигляді почвтку і кінця(якщо не вказати за замовчуванням до кінця масиву)
function fillFunction(array, number, start, end = array.length) {
    //за допомогою fill проводимо заміну значень масиву
    array.fill(number, start, end);
}

fillFunction(fillArray, 'six', 5)
console.log(fillArray);

fillFunction(fillArray, ';)', 0, 3)
console.log(fillArray);
