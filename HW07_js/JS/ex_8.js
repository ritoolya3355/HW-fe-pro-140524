// Отримуємо дату народження користувача у форматі YYYY-MM-DD через prompt
let userBirthDay = prompt('Bведіть дату свого народження у форматі YYYY-MM-DD');

// Функція для обчислення віку на основі дати народження
function calculateAge(userBirthDay) {
    // Перетворюємо рядок дати народження на об'єкт Date
    let birthDate = new Date(userBirthDay);
    // Створюємо об'єкт Date для поточної дати
    let nowDate = new Date();
    
    // Обчислюємо різницю в роках між поточною датою і датою народження
    let ageUser = nowDate.getFullYear() - birthDate.getFullYear();
    
    // Обчислюємо різницю в місяцях між поточною датою і датою народження
    let monthBirth = nowDate.getMonth() - birthDate.getMonth();
    // Обчислюємо різницю в днях між поточною датою і датою народження
    let dayBirth = nowDate.getDate() - birthDate.getDate();

    // Якщо різниця в місяцях менша за 0, або якщо місяць той самий, але день ще не настав, зменшуємо вік на 1
    if (monthBirth < 0 || (monthBirth === 0 && dayBirth < 0)) {
        ageUser--;
    }
    
    // Повертаємо обчислений вік
    return ageUser;
}

// Викликаємо функцію calculateAge з датою народження користувача і виводимо результат в консоль
console.log(`Вам: ${calculateAge(userBirthDay)} років`);