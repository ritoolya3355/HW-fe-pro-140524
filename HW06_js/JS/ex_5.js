let userName = prompt('Введіть своє ім’я'); // Запитуємо у користувача його ім'я
let userAge = prompt('Введіть свій вік'); // Запитуємо у користувача його вік

class Person {
    constructor(name, age) {
        this._name = name; // Присвоюємо ім'я користувача змінній _name
        this._age = age; // Присвоюємо вік користувача змінній _age
    }
    
    getUserInfo() {
        return `Ім’я: ${this._name}, вік: ${this._age}`; // Повертаємо інформацію про користувача
    }
}

let person = new Person(userName, userAge); // Створюємо новий об'єкт класу Person
console.log(person.getUserInfo()); // Виводимо інформацію про користувача у консоль

//наслідування
let userStudy = prompt('Що вивчаєте?');

class Student extends Person {
    constructor(name, age, study) {
        super(name, age); // Викликаємо конструктор батьківського класу
        this._study = study; // Додаємо нове поле _study
    }

    getStudentInfo() {
        // Викликаємо метод getUserInfo з батьківського класу
        return `${super.getUserInfo()}, вивчаю: ${this._study}`;
    }
}

let student = new Student(userName, userAge, userStudy);
console.log(student.getStudentInfo());


//тут трохи труднощі з присвоєннями, наче розібралася, але якщо даних буде більше буде важкувато