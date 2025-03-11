// შექმნილი ობიექტებიდან გამოიტანეთ მხოლოდ Keyები შემდეგ კი მხოლოდ Valueები

let info = {
    name : "goga",
    surname : "chalauri",
    age : 19,
    hoby : "coding",
    height : 1.80
}

console.log("keys", Object.keys(info))
console.log("Values", Object.values(info))
