//вказати при підключенні в html, що index.js має type="module"

// Імпорт функцій з stringUtilities.js
import { toUpperCase, reverseString } from './stringUtilities.js';

// Використання імпортованих функцій

let exampleString = "функція для перетворення рядка в uppercase і функція для обернення рядка";

console.log(`Original String: ${exampleString}`);
console.log(`Uppercase String: ${toUpperCase(exampleString)}`);
console.log(`Reversed String: ${reverseString(exampleString)}`);