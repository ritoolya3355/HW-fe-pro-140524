const books = [
    { author: 'J.K. Rowling', title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    { author: 'George R.R. Martin', title: 'A Game of Thrones', year: 1996 },
    { author: 'J.R.R. Tolkien', title: 'The Fellowship of the Ring', year: 1954 },
    { author: 'T.Gerritsen ', title: 'I know a secret', year: 2017 },
    { author: 'Dan Brown', title: 'The Da Vinci Code', year: 2003 }
];

// Виводимо весь початковий масив книг у консоль
console.log("Початковий масив книг:");
console.log(books);

// Створюємо функцію, яка фільтрує книги, опубліковані після 2000 року
function filterBooksAfter2000(books) {
    // Фільтруємо книги, які були опубліковані після 2000 року
    const filteredBooks = books.filter(book => book.year >= 2001);
    return filteredBooks;
}

// Викликаємо функцію для фільтрації книг та виводимо результат у консоль
const booksAfter2000 = filterBooksAfter2000(books);
console.log("Книги, опубліковані після 2000 року:");
console.log(booksAfter2000);


//розв’язок в класі:

function filterBooks(bookArr){
    return bookArr.filter(book=> book.year < 2000);
}

console.log (filterBooks(books));