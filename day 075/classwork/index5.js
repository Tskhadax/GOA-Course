// შექმენით ქვემოთ მოცემული ობიექტის მსგავსი ობიექტი თქვენს სასურველ მანქანაზე და დაამატეთ ფუნქცია CarFullInfo, რომლის გამოძაღებაზეც გამოიტანს მთლიან ინფორმაციას მანქანაზე(აუცილებლად გამოიყენეთ string formatting)

let carInfo = {
    car : "Toyota",
    brand : "camry",
    year : 2017,
    isElectric : true , 
    carFullInfo(){
        return `car name is ${this.car},brand is ${this.brand},release year is ${String(this.year)} and this car also is ${this.isElectric}`
    }
}
console.log(carInfo.carFullInfo())