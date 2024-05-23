//запит на день тижня приводимо у будь-який ргістр toLowerCase()
let youDay = prompt(`Enter today's day of the week`).toLowerCase();

//розбиваємо дні у відповідності до задач виконання

switch (youDay) {
    case 'tuesday':
    case 'thursday':
        console.log(`Today is ${youDay}, you have a lesson at 19`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Today is ${youDay} , weekend - take a rest`);
        break;
    case 'monday':
    case 'wednesday':
    case 'friday':
        console.log(`Today is ${youDay} , you are free from lessons - do your homework`);
        break;
    default:
        console.log('Incorrect day');
}