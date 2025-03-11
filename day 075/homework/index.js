let carInfo = {
    model : "toyota",
    milage : 12000,
    year : 2020,
    condition : "prettyWell",
    carCondition(carCondition){
        return `car is in ${carCondition} condition`
    }
}

console.log(carInfo.carCondition(carInfo.condition))



// არსებულ car ობიექტს , ობიექტის გარედან დაამატეთ color  და price  , ასევე ამოშალეთ milage , შემდეგ ყველაფერი გამოსახეთ console-ში 
carInfo.color="black"
carInfo.price=15000
delete carInfo.milage
console.log(carInfo)