window.onload = function () {
    // Отримуємо необхідні елементи
    let form = document.querySelector('#registrationForm'); // форма
    let submitButton = document.querySelector('#submitButton'); // кнопка відправки
    let password = document.querySelector('#password'); // поле пароля
    let rePassword = document.querySelector('#re-password'); // поле для повторного введення пароля

    // Додаємо прослуховувач подій для форми на події вводу
    form.addEventListener('input', function () {
        validateForm();
    });

    // Додаємо прослуховувач подій для поля повторного введення пароля
    rePassword.addEventListener('input', function () {
        validatePasswords();
    });

    // Додаємо прослуховувач події відправки форми
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Зупиняємо стандартну відправку форми
        if (validateForm()) {
            // Якщо форма валідна і паролі співпадають, відправляємо форму
            // Тут можна додати логіку відправки форми, наприклад, зберегти дані на сервері

            // Показуємо повідомлення про успішну реєстрацію
            alert('Thank you for registering!');

            // Очищаємо форму
            form.reset();

            // Відновлюємо початковий стан кнопки відправки
            submitButton.setAttribute('disabled', '');

            // Видаляємо клас invalid з полів
            password.classList.remove('invalid');
            rePassword.classList.remove('invalid');
        } else {
            // Якщо форма не валідна або паролі не співпадають, показуємо помилки
            validateFields();
        }
    });

    // Функція для валідації форми
    function validateForm() {
        let isValid = form.checkValidity() && password.value === rePassword.value && password.value.length >= 8;
    //форма валідна, кнопку розблоковуємо
        if (isValid) {
            submitButton.removeAttribute('disabled');
            //якщо ні - кнопку блокуємо
        } else {
            submitButton.setAttribute('disabled', '');
        }

        validateFields();

        return isValid;
    }

    // Функція для валідації паролів
    function validatePasswords() {
        if (password.value === rePassword.value) {
            rePassword.setCustomValidity('');
        } else {
            rePassword.setCustomValidity('Passwords must match');
        }

        validateFields();
    }

    // Функція для перевірки паролів на довжину і однаковість
    function validateFields() {
        if (password.value.length < 8) {
            password.setCustomValidity('Password must be at least 8 characters long');
            password.classList.add('invalid');
        } else {
            password.setCustomValidity('');
            password.classList.remove('invalid');
        }

        if (rePassword.value.length > 0 && password.value !== rePassword.value) {
            rePassword.setCustomValidity('Passwords must match');
            rePassword.classList.add('invalid');
        } else {
            rePassword.setCustomValidity('');
            rePassword.classList.remove('invalid');
        }
    }

    
}
