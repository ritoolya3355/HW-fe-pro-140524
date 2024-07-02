// Оголошення функцій для основних математичних операцій

function summ(a, b) {
    let result = a + b;
    console.log (`${a}+${b}=${result}`);
}

function minus(a, b) {
    let result = a - b;
    console.log (`${a}-${b}=${result}`);
}

function multiplication(a, b) {
    let result = a * b;
    console.log (`${a}*${b}=${result}`);
}

function division(a, b) {
    if (b !== 0) {
        let result = a / b;
        console.log (`${a}/${b}=${result}`);
    } else {
        throw new Error("Division by zero is not allowed");
    }
}

// Експорт функцій за допомогою named export
export { summ, minus, multiplication, division};