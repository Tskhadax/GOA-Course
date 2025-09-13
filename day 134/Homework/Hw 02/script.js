/* შექმენით 'უნივერსალური API':

 ▪პრომისი - getWeather - არეზოლვებს რანდომულ ამინდის ემოჯის ან არეჯექთებს: 'No info'
 ▪პრომისი - getCurrency - არეზოლვებს დოლარის კურს(HardCode - 2.7) ან არეჯექთებს: 'No info'
 ▪პრომისი - getNews - არეზოლვებს რაღაცა სიახლეს ან არეჯექთებს: 'No info'
გამოიყენეთ Promise.allSettled, რომ მიიღოთ ყველა პრომისის შედეგი/პასუხი.
კონსოლში უნდა გამოიტანოთ თითოეული {status, value} ან {status, reason}. */

// Task 000
let getWeather = new Promise((f, r)=> {
    let icon = ['☀️', '🌧️', '❄️']
    return f(icon[Math.floor( Math.random() * 3 )])
})

let getCurrency = new Promise((f, r) => {
    return r('No info')
})

let getNews = new Promise((f, r)=> {
    return f('ოფიციალურად დასტურდება რომ თბილისში ხალხი იხარშება ): ')
})

// Task 001
Promise.allSettled([getWeather, getCurrency, getNews]).then((value)=> {
    value.map(item => {
        console.log(item.status)
    })
})