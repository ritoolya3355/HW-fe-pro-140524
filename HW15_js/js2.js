window.onload = function() {
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => response.json())
    .then(json => {
        console.log(json);
        
        let pElement = document.querySelector('p');
        
        json.forEach(user => {
            let firstNameUser = document.createElement('span');
            firstNameUser.innerHTML = `${user.name}`; // Використовуємо властивість 'name' для відображення імені користувача
            
            let emailUser = document.createElement('span');
            emailUser.innerHTML = `${user.email}`; // Використовуємо властивість 'email' для відображення електронної пошти користувача
            
            pElement.appendChild(firstNameUser);
            pElement.appendChild(document.createTextNode(' - '));
            pElement.appendChild(emailUser);
            pElement.appendChild(document.createElement('br'));
        });
    })
    .catch(error => console.error('Error:', error)); //Обробка помилок
};

