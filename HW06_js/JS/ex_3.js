const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
//за допомогою for...of перебираємо значення об’єкту students, що повторюються
for (const value of students) {
    console.log(`Student:`);
    //за допомогою for...in перебираємо значення всередині кожного елемента об’єкта
    for (let key in value) {
        console.log(`${key} : ${value[key]}`);
    }
}