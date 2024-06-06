//Rest

// Функція, яка приймає ім'я, номер телефону та іншу інформацію про користувача
function showUserInfo(FirstName, phoneN, ...anotherUserInfo) {
    // Виводимо ім'я та номер телефону
    console.log(`${FirstName} ${phoneN}`);
    // Виводимо іншу інформацію про користувача у вигляді масиву
    console.log(anotherUserInfo);
}
// Викликаємо функцію з кількома аргументами
showUserInfo('John', '0671235678', '23', 'Kyiv', 'student');



// Функція, яка приймає будь-яку кількість числових аргументів і обчислює їх середнє значення
function calculateAverage(...numbers) {
    // Обчислюємо суму всіх чисел у масиві numbers за допомогою reduce
    let sumAll = numbers.reduce((sum, current) => sum + current, 0);

    // Обчислюємо середнє значення, для цього ділимо суму на довжину масиву
    let average = sumAll / numbers.length;
   //повертаємо обчислений результат
    return average;
}

// використання функції
console.log(calculateAverage(1, 2, 3, 4, 5, 6)); 
console.log(calculateAverage(0, 10, 20, 30, 40, 50)); 