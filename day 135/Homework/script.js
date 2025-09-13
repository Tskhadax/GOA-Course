/* 
შექმენით 3 Promise:
 ◻️fastTask – დასრულდეს resolve("Fast task finished") 500ms-ში.
 ◻️mediumTask – დასრულდეს resolve("Medium task finished") 1000ms-ში.
 ◻️slowTask – დასრულდეს resolve("Slow task finished") 1500ms-ში.
შემდეგ გამოიყენეთ Promise.race, რათა გამოიტანოთ მხოლოდ ის შედეგი, რომელიც პირველი დასრულდა.
 არ დაგავიწყდეთ Level 134 დავალებები
*/

let fastTask = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve('Fast task finished')
    }, 500)
})

let mediumTask = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve('Slow task finished')
    }, 1000)
})

let slowTask = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve('Slow task finished')
    }, 1500)
})

Promise.race([fastTask, mediumTask, slowTask])
.then(value => {
    console.log(value)
})
