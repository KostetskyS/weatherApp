fetch ('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=5f2a3794c58f13226552980c675ae34d') 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.querySelector('.city').textContent += data.name;
        document.querySelector('.temperature p').innerHTML += Math.round(data.main.temp - 273) + '&deg';
        document.querySelector('.weather').textContent += data.weather[0]['description'];
        document.querySelector('.wind').textContent += data.wind['speed'] + ' ' + 'm/s';
        document.querySelector('.pict p').innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png"> `;

        let widgetBackground = document.querySelector('.widget');

        if (data.weather[0]['main'].includes('Foggy')) {
            widgetBackground.classList.add('foggy');
    
        } 

        if (data.weather[0]['main'].includes('Rain')) {
            widgetBackground.classList.add('rain');
    
        } 

        if (data.weather[0]['main'].includes('Sunny')) {
            widgetBackground.classList.add('sunny');
    
        } 

        if (data.weather[0]['main'].includes('Storm')) {
            widgetBackground.classList.add('storm');
    
        } 
        
        if (data.weather[0]['main'].includes('Clouds')) {
            widgetBackground.classList.add('clouds');
    
        } 
    })
    .catch(function() {
        alert('памилка')
    })