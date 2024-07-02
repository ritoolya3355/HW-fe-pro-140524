// Функція для перетворення рядка в uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

// Функція для обернення рядка
function reverseString(str) {
    return str.split('').reverse().join('');
}

/*split('') розбиває рядок на масив символів. 
reverse() обертає порядок елементів у масиві.
join('') з'єднує всі елементи масиву в один рядок, 
використовуючи порожній рядок як роздільник.
*/

// Експорт функцій 
export { toUpperCase, reverseString };