let weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//В даному вівторок відповідає i=2, четвер i=4, тоді

for (let i = 0; i < 7; i++){
    if (i===2 || i===4) {
        console.log(`On ${weekArray[i]} lesson at 19`);
    }
}

