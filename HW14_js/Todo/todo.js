window.onload = function () {
    let form = document.querySelector('form');
    let todoInput = document.querySelector('#todo');
    let listGroup = document.querySelector('.list-group');

    // Функція для збереження списку у localStorage
    function saveToLocalStorage(items) {
        localStorage.setItem('todoList', JSON.stringify(items));
    }

    // Функція для завантаження списку з localStorage
    function loadFromLocalStorage() {
        let items = JSON.parse(localStorage.getItem('todoList'));
        return items ? items : [];
    }

    // Функція для створення нового елементу списку
    function createItem(value, date) {
        let item = document.createElement('li');
        item.classList.add('list-group-item');

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

    // Завантаження задач із localStorage при завантаженні сторінки
    let todoItems = loadFromLocalStorage();
    todoItems.forEach(item => {
        listGroup.appendChild(createItem(item.value, item.date));
    });

    // Обробка події обробки форми
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Перевірка, чи поле введення порожнє
        if (todoInput.value.length === 0) {
            todoInput.classList.add('bg-danger', 'border-danger');
        } else {
            let date = new Date().toDateString();
            let item = createItem(todoInput.value, date);
            listGroup.appendChild(item);

            // Додавання задачі у масив та збереження у localStorage
            todoItems.push({ value: todoInput.value, date: date });
            saveToLocalStorage(todoItems);

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
            // Видалення задачі зі списку та localStorage
            let item = e.target.parentElement;
            let text = item.textContent.split(': ')[0];
            todoItems = todoItems.filter(todo => todo.value !== text);
            saveToLocalStorage(todoItems);

            listGroup.removeChild(item);
        }
    });

    // Обробка події для корегування введеного рядка (подвійний клік на нього)
    listGroup.addEventListener('dblclick', function (e) {
        if (e.target.classList.contains('list-group-item')) {
            // Отримуємо текст елемента без дати
            let text = e.target.textContent.split(': ')[0];
            // Заповнюємо поле введення цим текстом
            todoInput.value = text;
            // Видаляємо вибраний елемент зі списку
            listGroup.removeChild(e.target);

            // Видалення задачі зі списку та localStorage
            todoItems = todoItems.filter(todo => todo.value !== text);
            saveToLocalStorage(todoItems);
        }
    });
}