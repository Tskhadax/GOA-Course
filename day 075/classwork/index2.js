// 3)Prompით მომხმარებელს შემოატანინეთ მისი სახელი, გვარი, ასაკი და ჰობი, შემდეგ ეს ინფორმაცია შეინახეთ ობიექტში, ასევე ამ ობიექტს დაუმატეთ ფუნქცია, რომლის გამოძახებაზეც კონსოლში გამოიტანს "Welcome {name}"

let info = {
    greet(){
        return "Welcome" + this.userName
    }
} 

let name1 = prompt("Enter Your Name:")
let surname = prompt("Enter Your Surname:")
let age = Number(prompt("Enter Your age"))
let hobby = prompt("Enter Your Hobby:")

info.userName=name1
info.userSurname=surname
info.userAge=age
info.userHobby=hobby

console.log(info.greet())
console.log(info)