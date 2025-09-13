// შექმენით რაღაცა პრომისი რომელიც რაიმე მნიშვნელობას დააბრუნებს გარკვეული დროის(1 წამიდან 10 წამამდე) შემდეგ. თუ ეს პრომისი პასუხს არ დააბრუნებს 5 წამის განმავლობაში, მაშინ დაარეჯექთეთ პრომისი და კონსოლზე გამოიტანეთ მესიჯი, რომ პრომისმა დროს გადააჭარბა.

// Task 001
let promise01 = new Promise((f, r)=> {
    let time = Math.floor(Math.random() * 10) + 1
    console.log(time)

    if (time > 5) {
        return r('promise-მა დროს გადააჭარბა')
    }else {
        setTimeout(()=> {
          return f('წარმატებით ჩაიტვირთა')  
        }, time)
    }
})

// Task 002
promise01
.then((value)=> {
    console.log(value)
})
.catch((error)=> {
    console.log(error)
})
