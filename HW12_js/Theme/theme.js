window.onload = function() {
    let colorYellowInput = document.querySelector('#color-yellow-input');
    let colorBlackInput = document.querySelector('#color-black-input');
    let changeColorYellowButton = document.querySelector('.btn-change-main_color');
    let changeColorBlackButton = document.querySelector('.btn-change-bg');

    // Функція для зміни кольору змінної --color-yellow
    function changeColorYellow() {
        let newColor = colorYellowInput.value;
        if (/^#[0-9A-F]{6}$/i.test(newColor)) { 
            /* Розписую для себе, щоб розібратися
            Перевірка правильності формату кольору,
            чи є рядок дійсним шістнадцятковим значенням кольору (hex color code):

            /.../i - початок та кінець регулярного виразу. Прапорець i означає, що перевірка буде нечутливою до регістру (case-insensitive).
            
            ^ - вказує на початок рядка.
            
            # - символ решітки (який має бути першим символом у шістнадцятковому значенні кольору).
            
            [0-9A-F]{6} - набір символів, які описують сам код кольору:
            
            [0-9A-F] - дозволені символи: цифри від 0 до 9 та літери від A до F (включаючи як малі, так і великі літери через прапорець i).
            {6} - вказує, що ці символи повинні повторюватися рівно 6 разів.
            $ - вказує на кінець рядка.
            .test(newColor) перевіряє, чи відповідає рядок newColor цьому регулярному виразу. /*/


            document.documentElement.style.setProperty('--color-yellow', newColor);
            colorYellowInput.value = ''; //очищаємо поле після введення
           // console.log(`Changed --color-yellow to ${newColor}`);
        } else {
            alert(`The color format: ${newColor} is not correct`);
        }
       
    }
    

    // Функція для зміни кольору змінної --color-black
    function changeColorBlack() {
        let newColor = colorBlackInput.value;
        if (/^#[0-9A-F]{6}$/i.test(newColor)) { // Перевірка правильності формату кольору
            document.documentElement.style.setProperty('--color-black', newColor);
            colorBlackInput.value = '';
           // console.log(`Changed --color-black to ${newColor}`);
        } else {
            alert(`The color format: ${newColor} is not correct`);
        }
    }

    // Додавання обробників подій для кнопок
    changeColorYellowButton.addEventListener('click', changeColorYellow);
    changeColorBlackButton.addEventListener('click', changeColorBlack);
}