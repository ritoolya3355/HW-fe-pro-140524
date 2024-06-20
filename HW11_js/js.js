window.onload = function () {
    /******Завдання 'onContextMenu' *********/

    // Отримуємо елементи текстового блоку та контекстного меню 
    let textBlockP = document.getElementById('change-context_menu');
    let contextMenu = document.getElementById('context-menu');


    // Додаємо обробник події для правого кліку (contextmenu) на текстовий блок
    textBlockP.addEventListener('contextmenu', (event) => {
        // Запобігаємо стандартному контекстному меню браузера
        event.preventDefault();

        // Отримуємо координати кліка миші
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        // Встановлюємо позицію контекстного меню відповідно до координат кліка
        contextMenu.style.top = `${mouseY}px`;
        contextMenu.style.left = `${mouseX}px`;
        // Відображаємо контекстне меню
        contextMenu.style.display = 'block';
    });

    // Додаємо обробник події для кліку на документі
    document.addEventListener('click', () => {
        // Ховаємо контекстне меню, коли користувач клікає будь-де на сторінці
        contextMenu.style.display = 'none';
    });

    // Отримуємо елементи опцій контекстного меню
    let centerAlign = document.getElementById('center-align');
    let rightAlign = document.getElementById('right-align');
    let leftAlign = document.getElementById('left-align');
    let hideElement = document.getElementById('hide-element');

    // Додаємо обробник події для опції "Вирівняти по центру"
    centerAlign.addEventListener('click', () => {
        // Встановлюємо текст в текстовому блоці по центру
        textBlockP.style.textAlign = 'center';
    });

    // Додаємо обробник події для опції "Вирівняти по правому краю"
    rightAlign.addEventListener('click', () => {
        // Встановлюємо текст в текстовому блоці по правому краю
        textBlockP.style.textAlign = 'right';
    });

    // Додаємо обробник події для опції "Вирівняти по лівому краю"
    leftAlign.addEventListener('click', () => {
        // Встановлюємо текст в текстовому блоці по лівому краю
        textBlockP.style.textAlign = 'left';
    });

    // Додаємо обробник події для опції "Приховати елемент"
    hideElement.addEventListener('click', () => {
        // Приховуємо текстовий блок
        textBlockP.style.display = 'none';
    });

    //??? зробила через id. Тут питання, як в даному прикладі краще - використовувати класи чи id?

    /******Завдання 'keyup' *********/

    let ball = document.querySelector('.ball');
    let field = document.querySelector('.playing-field');
    //початкова позиція для м’яча
    let x = 0;
    let y = 0;
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    // Функція для оновлення позиції м'яча
    function updatePosition() {
        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;
    }
    //додаємо обробники подій для клавіш
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            y = Math.max(0, y - 5); // Переміщення вгору на 5 пікселів, обмеження на межі поля
        } else if (event.key === 'ArrowDown') {
            y = Math.min(field.clientHeight - ball.clientHeight, y + 5); // Переміщення вниз на 5 пікселів, обмеження на межі поля
        } else if (event.key === 'ArrowLeft') {
            x = Math.max(0, x - 5); // Переміщення вліво на 5 пікселів, обмеження на межі поля
        } else if (event.key === 'ArrowRight') {
            x = Math.min(field.clientWidth - ball.clientWidth, x + 5); // Переміщення вправо на 5 пікселів, обмеження на межі поля
        }
        updatePosition(); // Оновлюємо позицію м'яча
    });

    //??? не розумію як тут використати keyup, чи щось не так зробила?

    /******Завдання 'mouseover' p*********/
    // Отримуємо елемент P
    let changeTextP = document.getElementById('change-text');

    // Зберігаємо початковий текст у dataset 
    changeTextP.dataset.initialText = changeTextP.textContent;

    // Додаємо обробник події наведення миші
    changeTextP.addEventListener('mouseover', function () {
        changeTextP.textContent = 'Hello, World!';
        changeTextP.classList.add('hover-text'); // Додаємо клас для зміни вигляду в CSS
    });

    // Додаємо обробник події відведення миші
    changeTextP.addEventListener('mouseout', function () {
        changeTextP.textContent = changeTextP.dataset.initialText; // Повертаємо до початкового тексту
        changeTextP.classList.remove('hover-text'); // Видаляємо клас для зміни вигляду
    });

    /******Завдання 'mouseover' div *********/
    // Отримуємо елементи
    let blockMouseOver = document.querySelector('.block-mouse-over');
    let blockDisappearing = document.querySelector('.block-disappearing');

    // Додаємо обробник події наведення миші
    blockMouseOver.addEventListener('mouseover', function () {
        blockDisappearing.style.display = 'block'; // Відображаємо блок
    });

    // Додаємо обробник події відведення миші
    blockMouseOver.addEventListener('mouseout', function () {
        blockDisappearing.style.display = 'none'; // Приховуємо блок
    });


    /****************Додаткове 'onMouseDown' і 'onMouseUp'***************/

    //зробила на основі того самого поля, що і з клавіатурою 

    let ball2 = document.querySelector('.ball2');
    let field2 = document.querySelector('.playing-field2');

    // Початкова позиція для м’яча 
    let x2 = 0;
    let y2 = 0;
    ball2.style.left = `${x2}px`;
    ball2.style.top = `${y2}px`;

    // Функція для оновлення позиції м'яча
    function updatePosition2() {
        ball2.style.left = `${x2}px`;
        ball2.style.top = `${y2}px`;
    }

    // Змінні для зберігання зміщення м'яча відносно курсору миші
    let offsetX, offsetY;
    let isDragging = false;


    // Додаємо обробник події натискання кнопки миші
    ball2.addEventListener('mousedown', function (event) {
        isDragging = true;
        ball2.style.cursor = 'grab';
        /*Метод getBoundingClientRect() дозволяє точно визначити позицію елемента на сторінці,
        що особливо корисно для обробки подій, які залежать від позиції миші, таких як перетягування. 
        Він повертає об'єкт з властивостями left, top, right, bottom, width і height, які допомагають у позиціонуванні та обмеженні елементів на сторінці.*/
        offsetX = event.clientX - ball2.getBoundingClientRect().left;
        offsetY = event.clientY - ball2.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
    });

    // Додаємо обробник події відпускання кнопки миші
    document.addEventListener('mouseup', function () {
        ball2.style.cursor = 'pointer';
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
    });

    // Функція для обробки події переміщення миші
    function onMouseMove(event) {
        if (isDragging) {
            x2 = event.clientX - field2.getBoundingClientRect().left - offsetX;
            /** event.clientX — горизонтальна координата миші відносно області перегляду.
            field2.getBoundingClientRect().left — горизонтальна координата верхнього лівого кута
            області field2 відносно області перегляду.
            Віднімання field2.getBoundingClientRect().left від event.clientX дає горизонтальну
            координату миші відносно області field2.
            offsetX — це зміщення м'яча відносно курсору миші (обчислюється при mousedown).
            Віднімання offsetX дозволяє врахувати це зміщення, щоб м'яч рухався разом з курсором миші, 
            а не починав рух від його лівого верхнього кута.*/
            y2 = event.clientY - field2.getBoundingClientRect().top - offsetY;

            // Обмежуємо м'яч в межах поля
            x2 = Math.max(0, Math.min(field2.clientWidth - ball2.clientWidth, x2));
            y2 = Math.max(0, Math.min(field2.clientHeight - ball2.clientHeight, y2));

            updatePosition2();
        }
    }

    /*Було складно, тут з визначенням координат і формулами  "завалилася", допомогла дочка. 
    Не впевнена, що зможу зробити сама. Ще багато над чим треба працювати додатково, не встигаю*/


}