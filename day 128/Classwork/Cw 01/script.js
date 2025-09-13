//    1) შექმენით ფუნქცია რომელიც დააბრუნებს ფრომისს შემდეგ მიიღეთ ფრომისი წაიკითხეთ მის მიერ დაresolve ებული მნიშვნელობა და დაბეჭდეთ შესაბამისი აიქონი ❄️ მნიშვნელობიდან გამომდინარე


let getWeather = () => {
    return new Promise(function (item1, item2) {
        item1('Sun')
    })
}

let getWeatherIcon = (icon) => {
    switch (icon) {
        case 'Sun':
            console.log('☀️')
            break
        case 'Rain':
            console.log('🌧️')
            break
        case 'Snow':
            console.log('❄️')
            break
    }
}

getWeather().then(getWeatherIcon)