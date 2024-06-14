window.onload = function () {
    let body = document.querySelector('body');
    let header = document.createElement('header');
    body.appendChild(header);

    header.style.display = 'flex';
    header.style.flexWrap = 'wrap';

    // Задаємо кількість блоків
    let numberBlock = 50;

    // Функція, що буде створювати div з відповідними стилями і додавати до header у кількості, вказаній раніше
    function createBlock(number) {
        for (let i = 1; i <= number; i++) {
            let myBlock = document.createElement('div');//сворюємо сам елемент

            // Додаємо стилі          
            myBlock.style.width = '50px';
            myBlock.style.height = '50px';
            myBlock.style.borderRadius = '50%';
            myBlock.style.backgroundColor = 'blue';
            myBlock.style.margin = '5px';

            // Встановлюємо випадковий колір фону (*****) викликавши функцію генерації кольору
            myBlock.style.backgroundColor = getRandomColor();

            // Додаємо клас в процесі створення елемента
            myBlock.classList.add('circle-element');
            if (i % 2 !== 0) { // Перевіряємо непарність індексу
                myBlock.classList.add('test');
            }
            header.appendChild(myBlock);//додаємо елементи до header
        }
    }

    // Викликаємо функцію створення div
    createBlock(numberBlock);

    // Заміна класу для парних блоків
    let evenBlocks = document.querySelectorAll('header div'); //звертаэмося до всіх div в header
    //перевіряємо на парність і змінюємо клас (.replace) для парних елементів з 'circle-element' на 'odd-circle-element'
    evenBlocks.forEach((block, i) => {
        //i+1, щоб почати нумерацію не з 0, а з 1
        if ((i + 1) % 2 === 0) {
            block.classList.replace('circle-element', 'odd-circle-element');
        }
    });

    // Функція, що генерує випадковий колір RGB (*****)викликаємо функцію там, де створюємо елемент)
    function getRandomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    /*всі завдання об’єднала, тому трохи переставляла і переписувала, 
    наче працює, але можливо щось пропустила, або щось є лишнє. Чи не порушила послідовність, можливо є якісь 
    зауваження стосовно порядку запису*/

//Додаткове
    /*Напишіть функцію, яка приймає масив об'єктів і значення для фільтрації. 
    Функція повинна повертати HTML-список (ul), який містить результати фільтрації.*/
    const data = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'John', age: 55 },
        { name: 'Anna', age: 19 },
        { name: 'David', age: 40 }
    ];
    let filterAge = 30;//наприклад, нехай поріг для фільтру буде 30 років

    //функція, що буде фільтрувати за віком, що більше певного вікового порогу
    function filterObjects(object, filterAge) {
        let filteredObj = object.filter(obj => obj.age >= filterAge);
        //створюємо список
        let ul = document.createElement('ul');
        ul.textContent = `The list of users is older ${filterAge}`;
        body.appendChild(ul);
        //перебираємо відфільтровані об’єкти 
        filteredObj.forEach(obj => {
            //створюємо рядки списку з відфільтрованих за віком об'єктів
            let li = document.createElement('li');
            li.textContent = `${obj.name} is ${obj.age} years old`;
            ul.appendChild(li);
        });
    }
  
    // Викликаємо функцію 
    filterObjects(data, filterAge);

    console.log(data); // Це не обов'язково, для перевірки - тут вхідні дані, а не відфільтровані
}



