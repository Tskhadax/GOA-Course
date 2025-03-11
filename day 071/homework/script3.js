// შექმენით სია, ამ სიაში შეინახეთ String-ტიპის მონაცემები და for-ციკლის გამოყენებით ახალ სიაში დაამატეთ ძველი სიიდან ყოველი სიტყვის პირველი ასო

let arr = ["luka","giorgi","beqa","irakli","saba"]
let empty = []

for(let i of arr){
    empty.push(i[0])
}
console.log(empty)