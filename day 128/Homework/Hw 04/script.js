// 4️⃣ შექმენი Promise, რომელიც აბრუნებს შემთხვევით რიცხვს 1-დან 10-მდე. თუ რიცხვი მეტია 5-ზე, პრომისი დაარეზოლვე, შემდეგ კი then()-ში დაბეჭდე "High number: X", ხოლო თუ 5-ზე ნაკლებია, შედეგი დაარეჯექთე. შექმენი ასევე ერრორ ჰენდლერ ფუნქცია, რომელიც ამ დარეჯექთებულ შედეგს დაპრინტავს.


let randomNumberPromise = () => {
    let number = Math.floor(Math.random() * 10) + 1
    console.log(`random number: ${number}`)

    return new Promise((f1, f2) => {
        return number > 5 ? f1(number) : f2(number)
    })
}

let errorFunction = (value) => {
    console.log(`Rejected number is ${value}`)
}

randomNumberPromise().then((value) => {
    console.log(`High number: ${value}`)
}, errorFunction)