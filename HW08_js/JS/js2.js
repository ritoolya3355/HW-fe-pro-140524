window.onload = function () {

    const elementsArray = [
        { tag: 'p', text: 'Елемент 1', className: 'p_ex' },
        { tag: 'div', text: 'Елемент 2', className: 'div_ex' },
        { tag: 'span', text: 'Елемент 3', className: 'span_ex' }
    ];

    //звертаємося до контейнера
    let container = document.querySelector('.container');
    console.log(container);
    //додаємо елементи і їх дані (тут додала в масив ще класи, щоб розуміти чи все норм працює)
    elementsArray.forEach(element => {
        //створюємо елемент за відповідним тегом з масиву
        let newEl = document.createElement(element.tag);
        console.log(newEl);
        //додаємо текст створеному елементу
        newEl.innerText = element.text;
        // Додаємо клас новому елементу
        newEl.className = element.className;
        container.appendChild(newEl); // Додаємо новий елемент до контейнера
        
    })
}
