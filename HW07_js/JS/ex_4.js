//Створюємо новий об'єкт Date, який автоматично бере поточну дату і час
let nowDate = new Date ();
//Використовуємо метод toLocaleString(), щоб перетворити дату та час у зручний для читання формат
let formatedNowDate = nowDate.toLocaleString();
//виводимо відформатовану дату
console.log(formatedNowDate);