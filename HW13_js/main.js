window.onload = function () {
    /************ завдання 1 ************ */

    function countUppercase(str) {
        // Регулярний вираз для пошуку всіх літер верхнього регістру
        let upperCaseRegEx = /[A-Z]/g;

        // Використовуємо метод match, щоб знайти всі відповідності у рядку
        let matches = str.match(upperCaseRegEx);

        // Якщо є відповідності, повертаємо їх кількість
        if (matches) {
            return matches.length;
        } else {
            // Якщо відповідностей немає, повертаємо 0
            return 0;
        }
    }

    // Тестуємо функцію з різними вхідними даними
    console.log(countUppercase("abc"));
    console.log(countUppercase("abcABC123"));

    // підрахунок великих літер в тексті <p class="count-upper-string">
    let testString = document.querySelector('.count-upper-string').innerText;
    console.log(countUppercase(testString));

    /************ завдання 2 ************ */

    // Функція для видалення всіх символів, які не є цифрами, і перетворення результату на число
    function removeTextSymbol(str) {
        // Регулярний вираз для пошуку всіх нечислових символів
        let nonDigitRegEx = /\D/g;

        // Видаляємо всі нечислові символи з рядка
        let numberStr = str.replace(nonDigitRegEx, '');

        // Перетворюємо отриманий рядок у число і повертаємо його
        return Number(numberStr);
    }

    // Викликаємо функцію removeTextSymbol з рядками, в яких потрібно видалити всі нечислові символи
    console.log(removeTextSymbol("hell5o wor6ld"));
    console.log(removeTextSymbol(testString));


    /************ завдання 3 ************ */

    function validateUserName(username) {
        // Регулярний вираз для перевірки юзернейма
        let usernameRegEx = /^[a-zA-Z0-9_-]{4,10}$/;
        /*Від початку рядка (^),
        дозволені символи: 
        малі літери від 'a' до 'z', 
        великі літери від 'A' до 'Z', 
        цифри від '0' до '9', 
        нижнє підкреслення _ і тире -
        Повинні повторюватися від 4 до 10 разів ({4,10})
        І закінчуватися в кінці рядка ($)*/

        // Перевіряємо юзернейм на відповідність регулярному виразу
        return usernameRegEx.test(username);
    }

    // Приклади перевірки
    console.log(validateUserName('a'));
    console.log(validateUserName('p1pp1'));
    console.log(validateUserName('asd43_34'));
    console.log(validateUserName('user-name_too25long'));

    /************ завдання 4 ************ */

    // Отримуємо елемент з текстом з елемента HTML
    let testMessage = document.querySelector('.delayed-message');

    // Функція для затриманого виведення повідомлення
    function delayedMessage(element, message, delayInMilliseconds) {
        setTimeout(() => {
            element.textContent = message;
        }, delayInMilliseconds);
    }

    // Приклад виклику функції з елементом, текстом і затримкою 3000 мілісекунд (3 секунди)
    delayedMessage(testMessage, "повідомлення", 2000);

    /************ додаткове************ */

    let timerDisplay = document.querySelector('.time');
    let startButton = document.querySelector('#start');
    let resetButton = document.querySelector('#reset');
    
    let timerInterval;
    let timeInSeconds = 1500; // 25 хвилин у секундах (25 * 60)
    
    // Функція для оновлення відображення таймера
    function updateTimerDisplay() {
        let minutes = Math.floor(timeInSeconds / 60);
        let seconds = timeInSeconds % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        /*padStart() - це метод, який додає вказану кількість символів на початок рядка, щоб досягти певної довжини
        в даному прикладі довжина 2, якщо менша, то на початку додається 0*/
    }
    
    function startTimer() {
        // Перевіряємо, чи вже не запущений інтервал
        if (!timerInterval) {
            // Якщо інтервал не запущений, то запускаємо новий інтервал
            timerInterval = setInterval(() => {
                // Кожну секунду (1000 мілісекунд) виконуємо наступні дії
    
                // Перевіряємо, чи час вже не вичерпано
                if (timeInSeconds > 0) {
                    // Якщо час ще не минув, зменшуємо кількість секунд на одиницю
                    timeInSeconds--;
    
                    // Оновлюємо відображення таймера з новим значенням
                    updateTimerDisplay();
                } else {
                    // Якщо час вичерпано (timeInSeconds <= 0), то очищаємо інтервал
                    clearInterval(timerInterval);
                    
                    // Скидаємо змінну timerInterval на null, щоб позначити, що інтервал більше не активний
                    timerInterval = null;
                }
            }, 1000); // Інтервал оновлення таймера кожну секунду (1000 мілісекунд)
        }
    }
    
    // Функція для скидання таймера
    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        timeInSeconds = 1500; // скидаємо на 25 хвилин
        updateTimerDisplay();
    }
    
    // Додаємо обробники подій кнопок
    startButton.addEventListener('click', startTimer);
    resetButton.addEventListener('click', resetTimer);
   

/*Або навпаки від 0 до 25
    let timerDisplay = document.querySelector('.time');
    let startButton = document.querySelector('#start');
    let resetButton = document.querySelector('#reset');

    let timerInterval;
    let timeInSeconds = 0;

    // Функція для оновлення відображення таймера
    function updateTimerDisplay() {
        let minutes = Math.floor(timeInSeconds / 60);
        let seconds = timeInSeconds % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        if (!timerInterval) {
            timerInterval = setInterval(() => {
                if (timeInSeconds < 25) {
                    timeInSeconds++;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                    timerInterval = null;
                }
            }, 1000);
        }
    }
    // Функція для скидання таймера
    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        timeInSeconds = 0; // скидаємо на 0
        updateTimerDisplay();
    }

    // Додаємо обробники подій кнопок
    startButton.addEventListener('click', startTimer);
    resetButton.addEventListener('click', resetTimer);

    // Ініціалізуємо відображення початкового часу
    updateTimerDisplay();
*/
}