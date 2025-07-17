// cvladebis sheqmna
let weatherApp = document.querySelector('.weatherApp')
let input = document.querySelector('.cityInput')
let card = document.querySelector('.card')
let apiKey = '69624d7789ebeb0613f5d83cbaa8c575'

// gilakze daweris shemdeg
weatherApp.addEventListener('submit', async e => {
    e.preventDefault()
    let city = input.value
    if (city) {
        try {
            let weatherData = await getWeather(city)
            weatherInfo(weatherData)

        } catch (error) {
            console.log(error)
            message(error)
        }
    } else {
        alert('Enter new City')
        message('Enter new city')
    }
})

// amindis migeba
async function getWeather(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    let result = await fetch(apiUrl)
    console.log(result)

    if (!result.ok) {
        throw new Error('Could Not Found')
    }
    return await result.json()
}
// რამე ხარვეზი თუა შესაბამისი მესიჯის ფუნქცია 
let message = (message) => {
    let errorMessage = document.createElement('p')
    errorMessage.textContent = message

    card.textContent = ''
    card.style.display = 'flex'
    card.appendChild(errorMessage)
}

// informatia
let weatherInfo = (data) => {
    console.log(data)
    let Information = {
        name: city,
        main: {
            temp,
            humidity
        },
        weather: [{
            description
        }],
        sys: {
            country
        }

    } = data

    card.textContent = ''


    // cvladebis sheqmna baratshi dasamateblad

    let displayCity = document.createElement('h2')
    let displayCountry = document.createElement('h3')
    let displayTemp = document.createElement('p')
    let humidityDisplay = document.createElement('p')

    // 

    displayCity.textContent = Information.name
    displayTemp.textContent = `${Math.floor(temp - 274.15)} C`
    humidityDisplay.textContent = description
    displayCountry.textContent = country

    card.appendChild(displayCity)
    card.appendChild(displayCountry)
    card.appendChild(displayTemp)
    card.appendChild(humidityDisplay)
    // displayCity.textContent = Information.name
}