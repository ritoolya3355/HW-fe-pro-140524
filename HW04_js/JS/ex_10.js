let arrayMatrix = [8, 12, 3, 5.4, 3.3];
//сортуємо у порядку зростання
    function sortNumbers(array) {
        return array.sort((a,b)=>a-b);  
  }
  //виводимо відсортований масив
    console.log (sortNumbers(arrayMatrix)); //не знаю, як переписати елементи, щоб масив працював, вже як відсортований, тому:
//для видалення останнього елемента створюємо новий масив, що прийме значння відсортованого
    let newArrayMatrix = (sortNumbers(arrayMatrix));
    //видаляємо останній елемент, він є найбільшим
    function minusMatrix(array, number) {
    array.pop(number);
    return array;
}

//виводимо новий масив 
console.log (minusMatrix(newArrayMatrix));