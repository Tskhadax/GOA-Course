// 3️⃣ დაწერე Promise, რომელიც 2 წამის შემდეგ აბრუნებს მომხმარებლის სახელს (მაგ. "Gio"). შემდეგ then()-ში დააბრუნე ტექსტი "Hello, Gio!" და ბოლოს დაბეჭდე ეს ტექსტი

let function1 = () => {
    return new Promise((f1, f2) => {
        setTimeout(() => {
            return f1('Ana')
        }, 2000)
    })
}

function1().then((value) => {
    console.log(`Hello ${value} !`)
})