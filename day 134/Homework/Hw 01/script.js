/* შექმენით სამი Promise:
 ▪getProduct – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 1 წამში,
 ▪getUser – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 2 წამში,
 ▪getPayment – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 3 წამში.
გამოიყენეთ Promise.all, რათა მიიღოთ ყველა მონაცემი ერთად.
თუ რომელიმე ჩაიჭრება(გააკეთეთ ისე, რომ პრომისებმა რანდომულად ან დარეჯექდნენ ან დარეზოლვდნენ), 
მთლიანი ოპერაცია უნდა გადავიდეს catch‑ში და გამოიტანოს "შეკვეთის დამუშავება ჩაიშალა".



შექმენით 'უნივერსალური API':
 ▪პრომისი - getWeather - არეზოლვებს რანდომულ ამინდის ემოჯის ან არეჯექთებს: 'No info'
 ▪პრომისი - getCurrency - არეზოლვებს დოლარის კურს(HardCode - 2.7) ან არეჯექთებს: 'No info'
 ▪პრომისი - getNews - არეზოლვებს რაღაცა სიახლეს ან არეჯექთებს: 'No info'
გამოიყენეთ Promise.allSettled, რომ მიიღოთ ყველა პრომისის შედეგი/პასუხი.
კონსოლში უნდა გამოიტანოთ თითოეული {status, value} ან {status, reason}.
შექმენით უნივერსალური ფუნქცია:

 ▪fakeServer(serverName)
ფუნქციის შიგნით დააგენერეითეთ:
 ▪0 ან 1 და შეინახეთ იგი willResolve ცვლადში
 ▪რიცხვი 100 დან 4000 და შეინახეთ იგი time ცვლადში
ამ ფუნქციამ უნდა დააბრუნოს პრომისი, რომელიც დააბრუნებს პასუხს time დროში.
პრომისი დაარეზოლვებს received data from ${serverName} in ${time}ms იმ შემთხვევაში თუ willResolve === 1
თუ willResolve === 0 პრომისი დაარეჯექთებს რაიმე ერორს.
გამოიყენეთ Promise.any და მის შიგნით რამდენჯერმე გამოიძახეთ შექმნილი ფუნქცია.
თუ ყველა ჩავარდება, დაიჭირეთ AggregateError და გამოიტანეთ ყველა ჩავარდნის მიზეზი .errors მასივით.
 ეს დავალებები გექნებათ ხუთშაბათისთვის  */


// Task 000
let getProduct = new Promise((f, r) => {
    setTimeout(() => {
        return f('Apple')
    }, 1000)
})

let getUser = new Promise((f, r) => {
    let user = {
        name: 'Ana',
        lastname: 'Puturidze',
    }
    setTimeout(() => {
        return r(user)
    }, 2000);
})

let getPayment = new Promise((f, r) => {
    setTimeout(() => {
        return f(1000)
    }, 3000)
})


// Task 001
Promise.all([getProduct, getUser, getPayment])
.then((value) => {
    console.log(value)
}).catch(()=> {
    console.log('შეკვეთის დამუშავება ჩაიშალა')
})