let smile = [':)', '=)', ':)', '=)', ':)', '=)'];
//проходимо по всій довжині масиву і заміняємо необхідний елемент
for (let i = 0; i < smile.length; i++) {
    switch (smile[i]) {
        case '=)':
            smile[i] = ';)';
            break;
    }
}
// виводимо оновлений масив
console.log(smile);