window.onload = function () {
    //додаємо main
    let body = document.querySelector('body');
    let main = document.createElement('main');
    body.appendChild(main);

    /************* onclick *********************/

    //створюємо кнопку і абзац
    let pEl = document.createElement('p');
    pEl.textContent = 'Абзац, що має взаємодію з кнопкою (onclick)';
    pEl.className = 'my-p-class';
    main.appendChild(pEl);
    let btnMain = document.createElement('button');
    btnMain.textContent = 'Натисни';
    btnMain.style.padding = '1%';
    btnMain.style.fontWeight = '600';
    btnMain.style.backgroundColor = '#1885b8';
    btnMain.style.color = '#FFFFFF';
    btnMain.style.borderRadius = '5px';
    main.appendChild(btnMain);

    // Функція, що генерує випадковий колір RGB 
    function getRandomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Додаємо обробник події для кнопки, що буде викликати зміни в стилях абзаца
    btnMain.onclick = function () {
        pEl.style.color = getRandomColor();
        pEl.style.backgroundColor = 'white';
        pEl.style.width = '30rem';
        pEl.style.fontSize = '2rem';
        pEl.style.borderColor = getRandomColor();
    };

    /****ondblclick*******/
    main = document.querySelector('main');
    let divEl = document.createElement('div');
    divEl.className = 'smallSize';
    divEl.textContent = 'При подвійному натиску я зрозту (ondblclick)';
    main.appendChild(divEl);

    // Додаємо обробник події dblclick для перемикання між класами smallSize і largeSize
    //розміри задаємо в класах css
    divEl.ondblclick = function () {
        divEl.classList.toggle('largeSize');
    };

    /*********addEventListener і removeEventListener************/

    main = document.querySelector('main');

    // Створюємо кнопку
    let btnMain2 = document.createElement('button');
    btnMain2.textContent = 'Натискаємо і рахуємо до 10';
    btnMain2.style.padding = '1%';
    btnMain2.style.fontWeight = '600';
    btnMain2.style.backgroundColor = '#1885b8';
    btnMain2.style.color = '#FFFFFF';
    btnMain2.style.borderRadius = '5px';
    main.appendChild(btnMain2);
    // Лічильник кліків
    let clickCounter = 0;

    // Функція-обробник події
    function createsElOnClick() {
        let divEl2 = document.createElement('div');
        divEl2.textContent = clickCounter;
        main.appendChild(divEl2);
        clickCounter++;

        // Коли лічильник дійде до 10, зупиняємо
        if (clickCounter > 10) {
            btnMain2.removeEventListener('click', createsElOnClick);
        }
    }

    // Додаємо обробник події click для кнопки
    btnMain2.addEventListener('click', createsElOnClick);

    
    /******* кнопка з 10 елементами *******/

    // Знаходимо body
    body = document.querySelector('body');

    // Створюємо контейнер
    let container = document.createElement('div');
    container.classList.add('container'); // Додаємо клас 'container' до контейнера
    body.appendChild(container); // Додаємо контейнер до body

    // Створюємо кнопку
    let addButton = document.createElement('button');
    addButton.classList.add('container-btn');
    addButton.textContent = 'Додай елементи, натиснувши'; // Додаємо текст на кнопку
    body.appendChild(addButton);

    // Функція для додавання елементів
    function addElements() {
        // Додаємо 10 елементів div до контейнера
        for (let i = 1; i <= 10; i++) {
            let div = document.createElement('div');
            //тут поставимо порядковий номер, щоб прослідкувати, як елементи будуть видалятися
            div.textContent = `Натисни і зникне - ${i}`;
            // Затримка анімації для кожного елемента, трохи згадую css :) 
            div.style.animationDelay = `${i * 0.4}s`; 
            div.classList.add('container-div');
            // додаємо обробник onclick кожному div, щоб при натиску -
            div.onclick = function () {
                //- div видалився:
                this.remove(); 
            };
            container.appendChild(div); // Додаємо div до контейнера
        }
        // Видаляємо обробник події після додавання елементів, щоб елементи більше не додавалися
        addButton.removeEventListener('click', addElements);
        //після додавання елементів кнопка зникає
        addButton.style.display = 'none';
    }

    // Додаємо обробник події для кнопки
    addButton.addEventListener('click', addElements);

/************ event.target ****************/

//створюємо div.block-container
let myBlock = document.createElement('div');
myBlock.classList.add('block-container');
body.appendChild(myBlock);
//додаємо до нього три однакові елементи 
for (let i = 1; i<=3; i++){
let btnBlock = document.createElement('button');
//додаємо різні класи
if (i===1){
    btnBlock.classList.add('first');
}else if (i===2){
            btnBlock.classList.add('second'); 
} else{
    btnBlock.classList.add('third'); 
}

// Використовуємо event.target у функції для доступу до натиснутої кнопки
btnBlock.onclick = function (event) {
    alert(`Hello, my name is ${event.target.classList}`);
};

/* зробила спочатку так, бо забула, що треба використати event.target:
btnBlock.onclick = function(){
    alert (Hello, my name ${btnBlock.classList});
    }*/

myBlock.appendChild(btnBlock);
btnBlock.textContent = `let's me introduce myself`;
}

/************ onclick + робота з css ****************/
//звертаємося до створених в html елементів:
let btnMenu = document.querySelector('header #toggleMenuBtn');
let headerMenu = document.querySelector('.header-menu');

/*для того, щоб кнопка відкривала і закривала меню - сворюємо функцію, 
що перевіряє умову і робить відповідну дію*/
btnMenu.onclick = function() {
    if (headerMenu.style.display === 'block') {
        headerMenu.style.display = 'none';
        btnMenu.textContent = 'Відкрити меню';
    } else {
        headerMenu.style.display = 'block';
        btnMenu.textContent = 'Закрити меню';
    }
}

/*тут питання: якщо я, наприклад, це меню маю перенести в кінець цієї сторінки, 
після всіх тих елементів, що я настворювала в JS. То як краще це реалізувати?*/

}
