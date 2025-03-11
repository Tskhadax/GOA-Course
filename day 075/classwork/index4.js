// შექმნილ ობიექტს გადაუარეთ for ციკლით და გამოიტანეთ key და value შემდეგი ფორმატით: "{key} is {value}"
let  info = {
    name : "goga",
    surname : "chalauri",
    age : 19,
    hoby : "coding",
    height : 1.80
}

for(let i in info){
    console.log(`key is ${i}, value is ${info[i]}`)
}