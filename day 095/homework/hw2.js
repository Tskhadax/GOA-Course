// 2)შექმენით სია სადაც გექნებათ 5 ობიექტი , ამ ობიექტებში შეინახავთ მომხმარებლის სახელს და ასაკს , თქვენი დავალებაა გაფილტროთ ეს სია და დატობოთ მხოლოდ იმ მომხმარებლის ობიექტები ვისი ასაკიც მეტი ან ტოლი იქნება 18 ზე



let user = [
    person1 = {
        name : "giorgi",
        age : 20,
    },
    person2 = {
        name: "lasha",
        age : 18,
    },
    person6 = {
        name : "irakli",
        age : 13,
    },
    person4 = {
        name : "beqa",
        age : 16
    }
]

let filt = element => element.age >= 18

let newArr = user.filter(filt)
console.log(newArr)