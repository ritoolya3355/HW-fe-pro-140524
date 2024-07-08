        window.onload = function() {
            // Знаходимо кнопку на сторінці і додаємо їй обробник події 'click'
            document.querySelector('#requestButton').addEventListener('click', async function(){
                /*try: Виконується запит до API, отримуються та обробляються дані про планету
                catch: Якщо під час виконання запиту або обробки даних виникає помилка, вона буде оброблена тут,
                 і у консоль буде виведено повідомлення про помилку*/
                try {
                    // Виконуємо запит до API для отримання інформації про планету
                    let response = await fetch('https://swapi.dev/api/planets/1/');
                    let planetData = await response.json(); // Перетворюємо відповідь у формат JSON
                    console.log(planetData); // Виводимо дані в консоль для перевірки

                    // Знаходимо div для виведення результатів
                    let resultDiv = document.querySelector('#result');
                    // Виводимо основну інформацію про планету
                    resultDiv.innerHTML = `
                        <h2>${planetData.name}</h2>
                        <p>Climate: ${planetData.climate}</p>
                        <p>Diameter: ${planetData.diameter}</p>
                        <p>Gravity: ${planetData.gravity}</p>
                        <p>Population: ${planetData.population}</p>
                        <p>Terrain: ${planetData.terrain}</p>
                    `;

                    // Якщо планета пов'язана з фільмами, виводимо список фільмів
                    if (planetData.films.length > 0) {
                        resultDiv.innerHTML += '<h3>Films:</h3><ul>';
                        for (let filmUrl of planetData.films) {
                            // Виконуємо запит для отримання інформації про кожний фільм
                            let filmResponse = await fetch(filmUrl);
                            let filmData = await filmResponse.json();
                            // Додаємо фільм до списку з посиланням на деталі фільму
                            resultDiv.innerHTML += `<li><a href="${filmUrl}">${filmData.title} (Release date: ${filmData.release_date})</a></li>`;
                        }
                        resultDiv.innerHTML += '</ul>'; // Закриваємо список
                    }
                } catch (error) {
                    // Якщо виникла помилка під час запиту або обробки даних, виводимо її в консоль
                    console.error('Error fetching data:', error);
                }
            });
        };
    
