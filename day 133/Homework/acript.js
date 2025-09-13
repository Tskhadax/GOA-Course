// Task 001
// შექმენით პირველი პრომისი, რომელიც:
//  ▪აგენერირებს შემთხვევით რიცხვს 1–დან 15–მდე.
//  ▪აგზავნის მოთხოვნას: 
// https://jsonplaceholder.typicode.com/users/${num}

//  ▪თუ ასეთი მომხმარებელი მოიძებნა (response.ok == true) → resolve მომხმარებლის ინფო.
//  ▪თუ ვერ მოიძებნა → reject შეცდომა.

// Task 002
// შექმენით მეორე პრომისი, რომელიც:
//  ▪აგენერირებს შემთხვევით რიცხვს 1–დან 150–მდე.
//  ▪აგზავნის მოთხოვნას: 
//  https://jsonplaceholder.typicode.com/posts/${num}

//  ▪თუ ასეთი პოსტი მოიძებნა (response.ok == true) → resolve პოსტის ინფო.
//  ▪თუ ვერ მოიძებნა → reject შეცდომა.
// გამოიყენეთ Promise.all, რომ ორივე პრომისი პარალელურად გაეშვას.
// Promise.all მეთოდზე  გამოიყენეთ then და catch მეთოდები, 
// then დაბეჭდავს ორივე მიღებულ ინფოს (მომხმარებელი და პოსტი).
// catch reject ის შემთხვევაში დააკონსოლოგებს, რომ მონაცემები ვერ მოიძებნ


// Task 001
// let promise01 = new Promise((f, r) => {
//     let randomNumber01 = Math.floor(Math.random() * 15) + 1
//     console.log(randomNumber01)

//     try {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber01}`)
//             .then((v) => {
//                 if (v.ok) {
//                     return f(v.json())
//                 } else {
//                     return r(v.json())
//                 }
//             })
//     }catch(error) {
//         console.error(error)
//     }
// })

async function promise01(){
    let randomNumber01 = Math.floor(Math.random() * 50) + 1
    // console.log(randomNumber01)

    try {
        let url = await fetch(`https://jsonplaceholder.typicode.com/users/${randomNumber01}`)
        let data = await url.json()
        if (!url.ok) {
            throw new Error('Not found ... ')
        }
 
        return data 

        
    }
    catch(error) {
        console.log(error, '12345')
    }
}
// promise01
// .then((v)=> {
//     console.log(v)
// })
// .catch((v) => {
//     console.error('Not found')
// })


// Task 002

// let promise02 = new Promise((f, r) => {
//     let randomNumber02 = Math.floor(Math.random() * 150) + 1
//     console.log(randomNumber02)

//     try {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber02}`)
//             .then((v) => {
//                 if (v.ok) {
//                     return f(v.json())
//                 } else {
//                     return r(v.json())
//                 }
//             })

//     }catch(error){
//         console.log(error)
//     }
// })

// promise02
// .then((v)=> {
//     console.log(v)
// })
// .catch((v) => {
//     console.error('Not found')
// })

// Task 001-002
Promise.all([promise01()])
    .then((value) => {
        console.log(value)
    })
    .catch(() => {
        console.error('Not found')
    })