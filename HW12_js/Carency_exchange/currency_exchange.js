window.onload = function() {
    // Функція для конвертації валюти
    function convertCurrency() {
        // Отримання значень з полів введення, використовуємо parseFloat для перетворення в число
        let amount = parseFloat(document.querySelector('#amount').value);
        let exchangeRate = parseFloat(document.querySelector('#exchange_rate').value);

        // Перевірка, чи введені значення є дійсними числами
        if (isNaN(amount) || isNaN(exchangeRate)) {
            // Виведення попередження, якщо значення недійсні
            alert('Please enter valid numbers');
            return; // Зупинка виконання функції, якщо значення недійсні
        }

        // Виконання конвертації: множення суми на курс обміну
        let exchangeAmount = amount * exchangeRate;

        // Виведення результату конвертації у поле exchange_amount
        document.querySelector('#exchange_amount').value = exchangeAmount.toFixed(2); // Округлення до 2 знаків після коми
    }

    // Додавання обробника події на кнопку
    document.querySelector('#convert-button').addEventListener('click', convertCurrency);
}    