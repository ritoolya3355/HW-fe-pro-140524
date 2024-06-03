console.log(`Person info:`)
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
//за допомогою for...in перебираємо властивості об’єкта і виводимо в консоль
for (let key in person) {
       console.log(`${key} : ${person[key]}`);
}