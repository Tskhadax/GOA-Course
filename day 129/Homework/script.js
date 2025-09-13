let button = document.querySelector('button')
let cityInput = document.querySelectorAll('input')[0]

let CityText = document.querySelectorAll('h3')[1]
let CountryText = document.querySelector('h4')
let temp = document.querySelectorAll('h1')[0]
let img = document.querySelectorAll('h1')[1]
let timezoneText = document.querySelector('h5')
let clickLi = document.querySelector('.getInfo').querySelectorAll('li')
let informationDiv = document.querySelector('.information')
let sugdivs = document.querySelector('.divs')

let searchIcon = document.querySelector('.fa-magnifying-glass')
let blur = document.querySelector('.blur')

let span = document.querySelectorAll('span')[1]

let history = JSON.parse(localStorage.getItem('history')) || []

let getWeather = () => {
    let city = cityInput.value
    let weather = () => {
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`)
            .then((e) => {
                return e.json()
            })
            .then((e) => {
                let info = e.results
                console.log(info)
                span.textContent = ''

                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${info[0].latitude}&longitude=${info[0].longitude}&hourly=temperature_2m`)

                    .then((valu) => {
                        return valu.json()
                    })
                    .then((valu) => {
                        console.log(valu.hourly)
                        history.push(city)
                        localStorage.setItem('history', JSON.stringify(history))

                        // saatebtan da temperaturebtan miwvdoma  
                        let time = valu.hourly.time
                        let temperature = valu.hourly.temperature_2m

                        console.log(time)
                        console.log(temperature)

                        // saatis gamotvla 
                        let curentDate = new Date()
                        let curentTime = `${curentDate.getFullYear()}-${String(curentDate.getMonth() + 1).length === 2 ? curentDate.getMonth() + 1 : '0' + Number(curentDate.getMonth() + 1)}-${curentDate.getDate()}T${String(curentDate.getHours()).length === 2 ? curentDate.getHours() : '0' + Number(curentDate.getHours())}:${curentDate.getMinutes() > 0 ? '00' : '0' + curentDate.getMinutes()}`

                        console.log(time.indexOf(curentTime))

                        // saatis indeqsit temperaturis siashi indexit modzebna
                        let index = time.indexOf(curentTime)
                        console.log(temperature[index])

                        // take value
                        let name = info[0].name
                        let country = info[0].country
                        let curentCityTemp = temperature[index]
                        let timeZone = info[0].timezone
                        let emoje = curentCityTemp <= 0 ? '❄️' : curentCityTemp > 0 && curentCityTemp <= 20 ? '😊' : curentCityTemp > 20 ? '☀️' : ''


                        // textContent shecvla
                        CityText.textContent = name
                        CountryText.textContent = country
                        temp.textContent = `${curentCityTemp}°C`
                        img.textContent = emoje
                        timezoneText.textContent = timeZone

                        // clickLi
                        let for24Hours = () => {
                            informationDiv.innerHTML = ''
                            clickLi[0].style.color = 'rgb(0, 136, 174)'
                            clickLi[1].style.color = 'white'
                            clickLi[2].style.color = 'white'

                            let ul = document.createElement('ul')

                            for (let indexLi = index; indexLi <= (index + 24); indexLi++) {
                                let pDate = document.createElement('p')
                                let pTime = document.createElement('p')
                                let pTemp = document.createElement('p')

                                pDate.textContent = time[indexLi].split('T')[0]
                                pTime.textContent = time[indexLi].split('T')[1]
                                pTemp.textContent = String(temperature[indexLi]).indexOf('.') !== -1 ? temperature[indexLi] + '°C' : temperature[indexLi] + '.0°C'


                                let li = document.createElement('li')

                                li.appendChild(pDate)
                                li.appendChild(pTime)
                                li.appendChild(pTemp)

                                ul.appendChild(li)
                            }

                            informationDiv.appendChild(ul)
                        }
                        clickLi[0].addEventListener('click', for24Hours)
                        for24Hours()


                        clickLi[1].addEventListener('click', () => {
                            informationDiv.innerHTML = ''
                            clickLi[1].style.color = 'rgb(0, 136, 174)'
                            clickLi[2].style.color = 'white'
                            clickLi[0].style.color = 'white'

                            let ul = document.createElement('ul')

                            for (let indexLi = index; indexLi < (index + 72); indexLi += 24) {
                                let pDate = document.createElement('p')
                                let pTime = document.createElement('p')
                                let pTemp = document.createElement('p')

                                pDate.textContent = time[indexLi].split('T')[0]
                                pTime.textContent = time[indexLi].split('T')[1]
                                pTemp.textContent = String(temperature[indexLi]).indexOf('.') !== -1 ? temperature[indexLi] + '°C' : temperature[indexLi] + '.0°C'


                                let li = document.createElement('li')

                                li.appendChild(pDate)
                                li.appendChild(pTime)
                                li.appendChild(pTemp)

                                ul.appendChild(li)
                            }

                            informationDiv.appendChild(ul)
                        }
                        )


                        clickLi[2].addEventListener('click', () => {
                            informationDiv.innerHTML = ''
                            clickLi[2].style.color = 'rgb(0, 136, 174)'
                            clickLi[1].style.color = 'white'
                            clickLi[0].style.color = 'white'

                            let ul = document.createElement('ul')

                            for (let indexLi = index; indexLi <= (time.length); indexLi += 24) {
                                let pDate = document.createElement('p')
                                let pTime = document.createElement('p')
                                let pTemp = document.createElement('p')

                                pDate.textContent = time[indexLi].split('T')[0]
                                pTime.textContent = time[indexLi].split('T')[1]
                                pTemp.textContent = String(temperature[indexLi]).indexOf('.') !== -1 ? temperature[indexLi] + '°C' : temperature[indexLi] + '.0°C'


                                let li = document.createElement('li')

                                li.appendChild(pDate)
                                li.appendChild(pTime)
                                li.appendChild(pTemp)

                                ul.appendChild(li)
                            }

                            informationDiv.appendChild(ul)
                        }
                        )


                        // sxva variantebi dziebis shedegad
                        console.log(history)
                        sugdivs.innerHTML = ''

                        for (let item = 1; item <= info.length; item++) {

                            let card = document.createElement('div')
                            let cardConteiner = document.createElement('div')

                            let h3 = document.createElement('h3')
                            let h4 = document.createElement('h4')
                            let h5 = document.createElement('h5')

                            h3.textContent = info[item].name
                            h4.textContent = info[item].country
                            h5.textContent = info[item].timezone

                            card.appendChild(h3)
                            card.appendChild(h4)
                            card.appendChild(h5)

                            card.className = 'card'
                            cardConteiner.className = 'card-conteiner'

                            cardConteiner.appendChild(card)
                            sugdivs.appendChild(cardConteiner)
                        }
                    })
            }).catch(() => {
                span.textContent = 'Not found (404) :)'
                span.style.color = 'red'
            })
    }
    if (city) {
        weather()
    } else if (history.length - 1 > 0) {
        city = history[history.length - 1]
        cityInput.value = city
        weather()
    } else {
        city = 'tbilisi'
        cityInput.value = city
        weather()
    }
}


button.addEventListener('click', getWeather)
document.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        getWeather()
    }
})


// let isOpen = false
// let open = () => {
//     isOpen = !isOpen

//     if (isOpen) {
//         blur.style.zIndex = '2'
//         blur.style.display = 'flex'
//         console.log(cityInput)
//     } else {
//         blur.style.zIndex = '-2'
//         blur.style.display = 'none'
//     }
// }
// searchIcon.addEventListener('click', open)

getWeather()