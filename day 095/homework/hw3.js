// 3)შექმენით სია სადაც გექნებათ ობიექტები , ამ ობიექტებში უნდა გქონდეთ სტუდენტის სახელი,გვარი და ქულები, ქულები უნდა იყოს სია , თქვენი დავალებაა გამოთვალოთ ქულების საშუალო შემდეგ გაფილტროთ მთავარი სია, ვისი საშუალო ქულაც იქნება მეტი ან ტოლი 90-ზე ისინი
//გადაიტანეთ გაფილტრულ სიაში , შემდეგ map()-ის საშუალებით გადაუარეთ გაფილტრულ სიას და დააბრუნეთ ახალ სიაში მხოლოდ
//სტუდენტის სახელები

let allStudent = [
    student1 = {
        name : "giorgi",
        surname : "bibilashvili",
        scores :[50,30,15,11,1245]
    },
    student2 = {
        name : "giorgi",
        surname : "tskhadadze",
        scores : [1,2,3,4,5]
    },
    student3 = {
        name : "irakli",
        surname : "gelashvili",
        scores : [7,14,56,1]
    }
]

let func = element => {
    sum = 0
    for(let i of element.scores){
        sum+=i
    }
    let avg = sum/element.scores.length
    return avg
}

let idk = allStudent.map(func)
console.log(idk)

let func2 = element => element >= 90

let idk2 = idk.filter(func2)
console.log(idk2)


let func3 = element =>element.name

let namesList = allStudent.map(func3)
console.log(namesList )




