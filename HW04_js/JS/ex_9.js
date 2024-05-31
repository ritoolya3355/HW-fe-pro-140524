let arrayMatrix = [1, 2, 3, 5.4, 3.3];
let newNumber = Number(prompt('Введіть будь-яке число'));

function checkNumbers(array, number) {

//перевіряємо чи число є в масиві .includes (цього ще не вчили)
    if (array.includes(number)) {
    
    } else {
        array.push(number);
    }
    return array;
}

console.log(checkNumbers(arrayMatrix, newNumber));


//варіант розглянутий на уроці

function addUniqNumber(arr, num){
    for (let i=0; i<arr.lenght; i++) {
        if(arr[i] === num){
            return arr;
        }
    }
    arr.push(num);
    return arr;
}

console.log (`test function ${addUniqNumber([1,2,3], 4)}`);
console.log (`test function ${addUniqNumber([1,2,3], 2)}`);
console.log (`test function ${addUniqNumber([1,2,3], 6)}`);