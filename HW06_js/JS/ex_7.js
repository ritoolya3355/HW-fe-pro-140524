const employees = [
    { name: 'John', age: 28, salary: 3000 },
    { name: 'Jane', age: 32, salary: 4000 },
    { name: 'Peter', age: 24, salary: 2500 },
    { name: 'Mark', age: 30, salary: 3500 }
];

// Функція для збільшення зарплати на 10%
function increaseSalary(employees) {
    const increasedSalaries = employees.map(employee => {
        return {
            name: employee.name,
            age: employee.age,
            salary: employee.salary * 1.1 // Збільшуємо зарплату на 10%
        };
    });
    return increasedSalaries;
}
//викликаємо функцію збільшення зарплати
const increasedSalary = increaseSalary(employees);

// Функція для сортування
function sortSalary(employees) {
    const sortedSalaries = employees.sort((a, b) => a.salary - b.salary);
    return sortedSalaries;

}
//викликаємо функцію сортування
const sortedSalaries = sortSalary(increasedSalary);
//виводимо відсортовані дані
console.log(sortedSalaries);


//інший варіант

/*function increaseSalary(arr) {
    let newSalaryDate =[];
    for (let employee of arr){
        let updateItem =[
            name: employee.name,
            age: employee.age,
            salary: employee.salary*1.1
        ]
        newSalaryDarte.push(updateItem);
    }
    return newSalaryDate
}
function sortSalary(arr){
    return arr.sort((a,b)=>{
        return a.salary-b.salary
    })
}
console.log (increaseSalary(employees));
console.log (sortSalary(employees));
*/