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


// коли збільшуємо зарплату на 10%, то чомусь виводить John 3300.00000000005, Mark 3850.00000000005
//не розумію, що не так зробила?