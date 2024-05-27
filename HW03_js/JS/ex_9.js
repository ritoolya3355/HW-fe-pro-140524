//запит планети приводимо у будь-який ргістр toLowerCase()
let planetName = prompt(`Введіть назву планети`).toLowerCase();

switch (planetName) {
    case 'меркурій':
    case 'венера':
    case 'земля':
    case 'марс':
    case 'юпітер':
    case 'сатурн':
    case 'уран':
    case 'нептун':
        console.log(`${planetName} - планета Сонячної системи`);
        break;

    default:
        console.log('Не коректна назва');
        break;
}
