// Замість var
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Замість var
const message = 'test';
console.log(message); // Виведе 'test'
function example() {
    if (true) {
        const newMessage = 'Hello, world!';
        console.log(newMessage); // Виведе 'Hello, world!'
    }
    console.log(message); // Виведе 'test'
}
example(); // Викликаємо функцію
