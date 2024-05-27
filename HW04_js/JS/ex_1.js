

//Створюємо масив користувачів
let users = ['Анатолій', 'Марина', 'Петро', 'Вероніка', 'Дмитро', 'Валерія'];
//Функція welcomeUser приймає параметри: масив users і привітання hiUser
function welcomeUser(users, hiUser) {
    //всередині функції використовуємо цикл for, який перебирає елементи масиву і викликає функцію  hiUser з іменем користувача
    for (let i = 0; i < users.length; i++) {
        hiUser(users[i]);
    }
}
//hiUser приймає ім’я користувача і виводить привітання
function hiUser(userName) {
    console.log(`Вітаю, ${userName}`);
}
//викликаємо функцію welcomeUser, щоб кожен елемент з масиву був переданий до функції hiUser, яка виведе привітання для кожного
welcomeUser(users, hiUser);


/*
//Переписуємо в стрілкову 


let users = ['Анатолій', 'Марина', 'Петро', 'Вероніка', 'Дмитро', 'Валерія'];
let welcomeUser = (users, hiUser) => {
    for (let i = 0; i < users.length; i++) {
        hiUser(users[i]);
    }
};

let hiUser = userName => {
    console.log(`Вітаю, ${userName}`);
};

welcomeUser(users, hiUser);


// працює, але не зовсім побачила різницю, може щось не так записала
*/