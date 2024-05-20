// Вартість і знижка товару
let costProduct = prompt("Введіть ватість товару, грн.:");
let discountPrc = 50;

//Розрахунок розміру знижки:
let discountProduct = (Number(costProduct) * Number(discountPrc)) / 100;

//Виводимо результат
alert(`% знижки: ${discountPrc}, сума Вашої знижки:  ${discountProduct} грн.`);

