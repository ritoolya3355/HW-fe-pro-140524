window.onload = function () {
    /******завдання 1 *********/
    
    // Отримуємо кнопки збереження та показу
    let saveBtn = document.querySelector('.btn__save');
    let showBtn = document.querySelector('.btn__show');

    // Додаємо обробники подій для кнопок
    saveBtn.addEventListener('click', saveCity);
    showBtn.addEventListener('click', showCity);

    // Функція для збереження міста
    function saveCity() {
        // Отримуємо значення з input-поля
        let cityInput = document.querySelector('#inputcity').value;

        // Регулярний вираз для валідації міста
        let cityRegex = /^[А-Яа-яЇїІі-]{2,20}$/;

        // Перевіряємо, чи введене значення відповідає регулярному виразу
        if (cityInput && cityRegex.test(cityInput)) {
            alert('Ваше місто збережене');
            // Зберігаємо введене значення в sessionStorage
            sessionStorage.setItem('city', cityInput);
        } else {
            alert('Будь ласка, введіть правильне місто (тільки кирилиця, від 2 до 20 символів)');
        }
    }

    // Функція для показу збереженого міста
    function showCity() {
        // Отримуємо збережене значення з sessionStorage
        let savedCity = sessionStorage.getItem('city');

        // Отримуємо div для виведення результату
        let outputDiv = document.querySelector('#output');

        // Перевіряємо, чи є збережене значення і виводимо його
        if (savedCity) {
            outputDiv.textContent = `Ваше місто: ${savedCity}`;
        } else {
            outputDiv.textContent = 'Немає збережених даних';
        }
    }
/*******************завдання 2 *****************/

    // Отримуємо елементи, що будуть змінювати кольори, при зміні теми + кнопки, що оголошені вище
    let header = document.querySelector('header');
    let outputDiv = document.querySelector('#output');

    // Створюємо меню для вибору тем
    let titleMenuTheme = document.querySelector('.container__themes');
    let menuThemes = document.querySelector('.theme__colors');

    // Додаємо обробник події наведення миші
    titleMenuTheme.addEventListener('mouseover', function () {
        menuThemes.style.display = 'block'; // Відображаємо меню
    });

    // Додаємо обробник події відведення миші
    titleMenuTheme.addEventListener('mouseout', function () {
        menuThemes.style.display = 'none'; // Приховуємо меню
    });

    // Отримуємо пункти меню для вибору тем
    let defaultThemeLi = document.querySelector('#default__theme');
    let darkThemeLi = document.querySelector('#dark__theme');
    let blueThemeLi = document.querySelector('#blue__theme');
    let yellowThemeLi = document.querySelector('#yellow__theme');

    // Додаємо обробники подій для різних тем
    defaultThemeLi.addEventListener('click', saveTheme);
    darkThemeLi.addEventListener('click', saveTheme);
    blueThemeLi.addEventListener('click', saveTheme);
    yellowThemeLi.addEventListener('click', saveTheme);

    // Функція для збереження теми
    function saveTheme(event) {
        let chosenTheme = event.target.id; // Отримуємо id обраного пункту меню
        localStorage.setItem('theme', chosenTheme); // Зберігаємо тему в localStorage
        changesTheme(); // Застосовуємо тему відразу після збереження
    }

    // Функція, що змінює тему, відповідно до вибору
    function changesTheme() {
        let chosenTheme = localStorage.getItem('theme'); // Отримуємо вибрану тему з localStorage
        if (chosenTheme === 'dark__theme') {
            header.style.backgroundColor = '#000000';
            saveBtn.style.backgroundColor = '#808080';
            showBtn.style.backgroundColor = '#808080';
            outputDiv.style.backgroundColor = '#696969';
        } else if (chosenTheme === 'blue__theme') {
            header.style.backgroundColor = '#87CEEB';
            saveBtn.style.backgroundColor = '#00BFFF';
            showBtn.style.backgroundColor = '#00BFFF';
            outputDiv.style.backgroundColor = '#0000FF';
        } else if (chosenTheme === 'yellow__theme') {
            header.style.backgroundColor = '#FFFFE0';
            saveBtn.style.backgroundColor = '#FFE4B5';
            showBtn.style.backgroundColor = '#FFE4B5';
            outputDiv.style.backgroundColor = '#FFFF00';
        } else if (chosenTheme === 'default__theme') {
            header.style.backgroundColor = '';
            saveBtn.style.backgroundColor = '';
            showBtn.style.backgroundColor = '';
            outputDiv.style.backgroundColor = '';
        }
    }

    // Застосовуємо тему при завантаженні сторінки, якщо вона була збережена
    changesTheme();

};