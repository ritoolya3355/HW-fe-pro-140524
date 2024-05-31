let numbersArr = [20, 22, 54, 55, 18, 31, 14, 97];
let start = 1;
let end = 4;
//функція, що приймає масив, початковий і кінцевий індекс
function reverseInternalarray(array, start, end) {
//створюємо внутрішній підмасив 
let internalArr = array.slice(start, end+1);
internalArr.reverse();
return internalArr;
}
let newArr=reverseInternalarray(numbersArr, start, end)
console.log (newArr);



    

    
