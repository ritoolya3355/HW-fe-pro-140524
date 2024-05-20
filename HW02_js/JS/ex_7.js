// Запитуємо у користувача ввести свій бал
let points = prompt("Введіть свій бал за тест (число від 1 до 100):");

// Перетворюємо введене значення на число
points = parseInt(points);

// Збільшуємо оцінку на одиницю
let incrementedPoints = points + 1;

//****let incrementedPoints = points++; не зрозуміла, як працює поcтфіксний інкремент 

// Визначаємо буквенну оцінку до і після інкремента
let gradeBeforeIncrement;
let gradeAfterIncrement;

if (points >= 90 && points <= 100) {
    gradeBeforeIncrement = 'A';
} else if (points >= 80 && points <= 89) {
    gradeBeforeIncrement = 'B';
} else if (points >= 70 && points <= 79) {
    gradeBeforeIncrement = 'C';
} else if (points >= 60 && points <= 69) {
    gradeBeforeIncrement = 'D';
} else if (points >= 0 && points <= 59) {
    gradeBeforeIncrement = 'F';
} else {
    gradeBeforeIncrement = "Невірне введення. Будь ласка, введіть число від 1 до 100";
}

/*if (incrementedPoints >= 90 && incrementedPoints <= 101) {
    gradeAfterIncrement = 'A';
} else if (incrementedPoints >= 80 && incrementedPoints <= 89) {
    gradeAfterIncrement = 'B';
} else if (incrementedPoints >= 70 && incrementedPoints <= 79) {
    gradeAfterIncrement = 'C';
} else if (incrementedPoints >= 60 && incrementedPoints <= 69) {
    gradeAfterIncrement = 'D';
} else if (incrementedPoints >= 0 && incrementedPoints <= 59) {
    gradeAfterIncrement = 'F';
} else {
    gradeAfterIncrement = "Невірне введення. Будь ласка, введіть число від 1 до 100";
}*/

// запишемо за допомогою тернарного оператора

gradeAfterIncrement = (incrementedPoints >= 90 && incrementedPoints <= 101) ? 'A' : 
gradeAfterIncrement = (incrementedPoints >= 80 && incrementedPoints <= 89) ? 'B' :
gradeAfterIncrement = (incrementedPoints >= 70 && incrementedPoints <= 79) ? 'C' :
gradeAfterIncrement = (incrementedPoints >= 60 && incrementedPoints <= 69) ? 'D' :
gradeAfterIncrement = (incrementedPoints >= 0 && incrementedPoints <= 59) ? 'F' :
gradeAfterIncrement = "Невірне введення. Будь ласка, введіть число від 1 до 100";


// Визначаємо, чи студент зарахований
let isPass = incrementedPoints >= 60 && incrementedPoints <= 101;

// Виводимо результат
console.log(`Ви ввели ${points}`);

console.log(`Оцінка до інкремента: ${gradeBeforeIncrement}`);
console.log(`Оцінка після інкремента: ${gradeAfterIncrement}`);

if (isPass) {
    console.log(`Студент зарахований: Так`);
} else {
    console.log(`Студент зарахований: Ні (перевірте правильність введення балів`);
}