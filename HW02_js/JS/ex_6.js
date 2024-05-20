// Запитуємо у користувача ввести номер місяця
let month = prompt("Введіть номер місяця (від 1 до 12):");

// Перетворюємо введене значення на число
month = parseInt(month);

// Визначаємо сезон за введеним номером місяця
let season;
if (month >= 1 || month <= 2 || month === 12) {
    season = "Зимовий місяць";
} else if (month >= 3 && month <= 5) {
    season = "Весняний місяць";
} else if (month >= 6 && month <= 8) {
    season = "Літній місяць";
} else if (month >= 9 && month <= 11) {
    season = "Осінній місяць";
} else {
    season = "Невірний номер. Будь ласка, введіть число від 1 до 12";
}

// Виводимо результат у консоль
console.log(season);