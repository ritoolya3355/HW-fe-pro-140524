//TypeOf
//функція, що приймає аргумент і визначає його тип, за допомогою typeof
function showTypeArgument(argument){
    let type = typeof argument;
    return type;
}

//використовуємо функцію підставляючи різні аргументи
console.log (showTypeArgument(43));
console.log (showTypeArgument('i'));
console.log (showTypeArgument(false));
console.log (showTypeArgument([1,1,3]));
console.log (showTypeArgument({ name: 'Veronika' }));
console.log (showTypeArgument(null));
console.log (showTypeArgument(NaN));
console.log (showTypeArgument(undefined));
console.log (showTypeArgument(Symbol()));
console.log (showTypeArgument(function() {}));


//створюємо функцію, яка перевіряє тип змінної та 
//виводить повідомлення "Це число", "Це рядок" або "Це інший тип"
function getTypeArgument(argument){
    let typeArg = typeof argument;
    if (typeArg === "string") {
        console.log('Це рядок');
    } else if (typeArg === 'number'){
        console.log ('Це число')
    } else
    console.log ('Це інший тип аргументу')
    }
    //використовуємо функцію підставляючи різні аргументи
    getTypeArgument(42);
    getTypeArgument('Привіт!');
    getTypeArgument(true);
    getTypeArgument('NaN');
    getTypeArgument(NaN);