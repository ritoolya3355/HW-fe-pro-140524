window.onload = function () {
    let form = document.querySelector('form');
    let todoInput = document.querySelector('#todo');
    let listGroup = document.querySelector('.list-group');

    // Функція для створення нового елементу списку
    function createItem(value) {
        let item = document.createElement('li');
        item.classList.add('list-group-item');
        let date = new Date().toDateString();

        // Створення текстового вузла з введеним значенням і датою
        let textNode = document.createTextNode(`${value}: ${date}`);
        item.appendChild(textNode);

        // Створення кнопки видалення
        let buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'Х';
        buttonRemove.classList.add('remove-button');
        item.appendChild(buttonRemove);

        return item;
    }

    // Обробка події обробки форми
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Перевірка, чи поле введення порожнє
        if (todoInput.value.length === 0) {
            todoInput.classList.add('bg-danger', 'border-danger');
        } else {
            listGroup.appendChild(createItem(todoInput.value));
            todoInput.value = '';
            // Видалення червоного фону та бордера, якщо вони є
            if (todoInput.classList.contains('border-danger')) {
                todoInput.classList.remove('bg-danger', 'border-danger');
            }
        }
    });

    // Обробка події натискання на кнопку видалення
    listGroup.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-button')) {
            listGroup.removeChild(e.target.parentElement);
        }
    });

    /****** додаткове
     коригування прямо в рядку 
     */
    //Обробка події для корегування введеного рядка при наведенні на нього
    listGroup.addEventListener('dblclick', function (e) {
        if (e.target.classList.contains('list-group-item')) {
            // Отримуємо текст елемента без дати
            let text = e.target.textContent.split(': ')[0];
            // Заповнюємо поле введення цим текстом
            todoInput.value = text;
            // Видаляємо вибраний елемент зі списку
            listGroup.removeChild(e.target);
        }
    });

}
