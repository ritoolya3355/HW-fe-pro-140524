window.onload = function () {// Зразок даних
    let invoices = [
        { id: 1, date: '2024-06-01', customer: 'John Doe', payableAmount: 500, paidAmount: 300, due: 200 },
        { id: 2, date: '2024-06-15', customer: 'Jane Smith', payableAmount: 700, paidAmount: 700, due: 0 },
        { id: 3, date: '2024-07-01', customer: 'Bob Johnson', payableAmount: 600, paidAmount: 400, due: 200 },
        { id: 4, date: '2024-07-02', customer: 'Jacob Marcus', payableAmount: 100, paidAmount: 0, due: 100 },
        { id: 5, date: '2024-07-04', customer: 'Mark Peterson', payableAmount: 800, paidAmount: 400, due: 400 },
        { id: 6, date: '2024-07-10', customer: 'Ewa Berk', payableAmount: 1600, paidAmount: 900, due: 500 },
    ];

    // Функція для відображення даних у таблиці
    function displayInvoices(data) {
        let tableBody = document.querySelector('#invoiceTableBody');
        tableBody.innerHTML = ''; // Очищення таблиці перед додаванням нових даних

        // Проходимо по кожному інвойсу та додаємо його до таблиці
        data.forEach(invoice => {
            let row = document.createElement('tr');

            // Додаємо дані інвойсу до рядка таблиці
            Object.values(invoice).forEach(value => {
                let cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });

            tableBody.appendChild(row); // Додаємо рядок до таблиці
        });
    }

    // Початкове відображення даних
    displayInvoices(invoices);

    // Функція для фільтрації інвойсів на основі критеріїв пошуку
    function searchInvoices() {
        // Отримання значень полів пошуку
        let startDate = document.querySelector('#startDate').value;
        let endDate = document.querySelector('#endDate').value;
        let invoiceId = document.querySelector('#invoiceId').value;
        let customerName = document.querySelector('#customerName').value.toLowerCase();

        // Фільтрація інвойсів
        let filteredInvoices = invoices.filter(invoice => {
            //Отримання дати інвойсу у вигляді об'єкта Date
            let invoiceDate = new Date(invoice.date);
            //Якщо startDate не порожній, перетворюємо його у формат об'єкта Date. Інакше присвоюємо null
            let start = startDate ? new Date(startDate) : null;
            //аналогічно
            let end = endDate ? new Date(endDate) : null;

            /* Перевірка критеріїв пошуку
!start || invoiceDate >= start: Перевіряємо, чи start не вказаний (null), 
або чи дата інвойсу більша або дорівнює start. Якщо start не вказаний, ця умова завжди буде true.

!end || invoiceDate <= end: Перевіряємо, чи end не вказаний (null), або чи дата інвойсу менша або дорівнює end. 
Якщо end не вказаний, ця умова завжди буде true.
!invoiceId || invoice.id.toString() === invoiceId: Перевіряємо, чи invoiceId не вказаний (порожній рядок), 
або чи ID інвойсу дорівнює введеному invoiceId. Якщо invoiceId не вказаний, ця умова завжди буде true.
!customerName || invoice.customer.toLowerCase().includes(customerName): Перевіряємо, чи customerName не вказаний 
(порожній рядок), або чи ім'я клієнта включає введене значення customerName (використовуючи метод includes). 
Ім'я клієнта та введене значення порівнюються в нижньому регістрі для забезпечення нечутливості до регістру.
*/
            return (!start || invoiceDate >= start) &&
                (!end || invoiceDate <= end) &&
                (!invoiceId || invoice.id.toString() === invoiceId) &&
                (!customerName || invoice.customer.toLowerCase().includes(customerName));
        });

        // Відображення відфільтрованих інвойсів
        displayInvoices(filteredInvoices);
    }

    // Додаємо обробник події для кнопки пошуку
    document.querySelector('#searchButton').addEventListener('click', searchInvoices);
}
