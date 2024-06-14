window.onload = function () {
    //звертаємося до першого елемента
    let liEl = document.querySelector('li');
    console.log(liEl);
    //або
    liEl = document.querySelector('.ex1 li:first-child');
    console.log(liEl);
    //до останнього елемента
    liEl = document.querySelector('.ex1 li:last-child');
    console.log(liEl);
    // звертаємося до третього елемента
    liEl = document.querySelector('.ex1 li:nth-child(3)');
    console.log(liEl);

    //конвертуємо в масив
    let [...ulElements] = document.querySelectorAll('.ex1 li');
    console.log(ulElements);

    // Вибираємо всі елементи <li> всередині <ul> з класом "nav"
    let listItems = document.querySelectorAll('ul.nav > li');
    console.log(listItems); // Виводимо всі знайдені елементи в консоль

    // Вибираємо другий елемент <li> у будь-якому списку
    let listItem = document.querySelectorAll('li:nth-child(2)');
    console.log(listItem);
    //обере другий елемент в обох списках
    //якщо вказати клас і querySelector:
    listItem = document.querySelector('.nav li:nth-child(2)');
    console.log(listItem); //обере другий елемент списку class='nav'

    //маємо масив
    const booksArray = [
        {
            title: 'Пригоди Аліси в Країні Див',
            year: 1865,
            rating: 4.5
        },
        {
            title: '1984',
            year: 1949,
            rating: 4.8
        },
        {
            title: 'Гаррі Поттер і філософський камінь',
            year: 1997,
            rating: 4.7
        }
    ];

    // звертаємося до таблиці
    let table = document.querySelector('table');

    // Створюємо елемент (createElement) tbody або можна створити пустий в HTML і до нього звернутися через querySelector
    let bodyTable = document.createElement('tbody');
    console.log(bodyTable);
    // Проходимо по масиву booksArray і додаємо рядки в таблицю


    /*зробила як Ви пояснювали через forEach, але труднощі у виборі метода є,
   бо коли він вказується у завданні то одне, а коли вибрати самому - інше. 
   Хотілося б більше практичних прикладів використання різних методів у тій чи
   іншій ситуації.
   Бо знання синтаксису в мене ще дуже кульгає*/


       booksArray.forEach(book => {
        // Створюємо новий рядок таблиці tr
        let newRowTable = document.createElement('tr');
        console.log(newRowTable);
        // Створюємо і заповнюємо комірки
        let titleCell = document.createElement('td');

        titleCell.innerText = book.title;
        newRowTable.appendChild(titleCell);

        //можна замість innerText - textContent

        let yearCell = document.createElement('td');
        yearCell.innerText = book.year;
        newRowTable.appendChild(yearCell);

        let ratingCell = document.createElement('td');
        ratingCell.innerText = book.rating;
        newRowTable.appendChild(ratingCell);

        // Додаємо рядок до tbody
        bodyTable.appendChild(newRowTable);
    });

    // Додаємо tbody до таблиці
    table.appendChild(bodyTable);

}