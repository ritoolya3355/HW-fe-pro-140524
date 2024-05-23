let number1 = prompt("Введіть перше число для порівняння:") ;
let number2 = prompt("Введіть друге число для порівняння:");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

if (number1 === number2) {
    alert ('Числа рівні');
}
else {
    alert ('Числа не рівні');
}

