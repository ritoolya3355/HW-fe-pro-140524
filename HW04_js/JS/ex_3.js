let arrayNumbers = [5, 2, 3, 4];
//Оголошуємо функцію checkNumbers, яка приймає три аргументи: array (масив), number (поточний елемент) та index (індекс поточного елемента)
function checkNumbers(array, number, index) {
    //перевіряємо,чи поточний елемент number дорівнює елементу масиву за індексом index
    if (number = array[index]) {
    //якщо так, то замінюємо цей елемент на його квадрат
        array[index] = number ** 2;
    }
}
//за допомогою цикла for проходимо по всіх елементах масиву arrayNumbers
for (let i = 0; i < arrayNumbers.length; i++) {
  //На кожному колі циклу передаємо функції checkNumbers масив arrayNumbers, поточний елемент arrayNumbers[i], його індекс i  
checkNumbers(arrayNumbers, arrayNumbers[i], i);  
//важлива послідовність аргументів, щоб відповідали - при оголошенні = при виклику (array=arrayNumbers, number=arrayNumbers[i], index=i)
}
//виводимо модифікований масив
console.log(arrayNumbers);


//розписую собі кожний етап, бо зробила по аналогії з smile на уроці, але не до кінця зрозуміла, що і до чого. 


