// შექმენით ობიექტი user , ამ ობიექტში შეინახე შესაბამისი key-ები , for in - ციკლის  გამოყენებით გადაუარე თითოეულ key-ს და გამოსახე console-ში\

let user = {
    name : "giorgi",
    surname : "sukhitashvili",
    age : 23,
    height : 1.87,
}

for(let i in user){
    console.log(i,user[i])
    
}

console.log(user)