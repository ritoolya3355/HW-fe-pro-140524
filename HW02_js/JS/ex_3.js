// Ціна і кількість товару
let quantityProduct = prompt("Ввести кількість товару:");
let priceProduct = prompt("Ввести ціну товару:");


//Розрахунок вартості:
let costProduct = Number(quantityProduct) * Number(priceProduct);

//Виводимо результат
console.log(`Кількість товару:  ${quantityProduct}`);
console.log(`Ціна:  ${priceProduct}`);
console.log(`Вартість:  ${costProduct}`);

