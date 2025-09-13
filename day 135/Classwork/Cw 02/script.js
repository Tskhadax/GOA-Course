// შექმენით რაღაცა პრომისი რომელიც რაიმე მნიშვნელობას დააბრუნებს გარკვეული დროის(1 წამიდან 10 წამამდე) შემდეგ. შექმენით ასევე მეორე პრომისი, რომელიც იქნება დროის ლიმიტერი - დაარეჯექთებს რაიმე ერორს, ვთქვათ 5 წამში. გამოიყენეთ race მეთოდი 

let randomTime = Math.floor( Math.random() * 10 ) + 1
console.log(randomTime)

let promise01 = new Promise((f, r)=> {
    setTimeout(()=> {
        return f('ეს ფრომისი შესრულებულია')
    
    }, randomTime * 1000)
})
let promise02 = new Promise((f, r)=> {
    setTimeout(()=> {
        return r('დარეჯექთებულია')
    }, 5000)
})

Promise.race([promise01, promise02])
.then((value)=> {
    console.log(value)
}).catch((error)=> {
    console.log(error)
})