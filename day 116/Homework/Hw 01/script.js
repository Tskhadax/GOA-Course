/* 1) შექმენით Transport მშობელი კლასი, რომელსაც ექნება: 
--- თვისებები --- 
მაქსიმალური სიჩქარე(maxSpeed): Number
ფერი (color): String
საწვავის რაოდენობა(ლიტრებში) (fuel): Number 
განვლილი მანძილი (distanceTraveled): Number = 0 (ობიექტის შექმნის დროს არის 0)
 --- მეთოდები --- 
საწვავის შევსება refuel(liter) 
◼ მეთოდი უნდა ავსებდეს(უმატებდეს) ტრანსპორტის საწვავის რაოდენობას.
◼ მოახდინეთ liter არგუმენტის ვალიდაცია(უნდა იყოს Number ტიპის, არაუარყოფითი რიცხვი)
ფერის შეცვლა changeColor(color)
◼ მეთოდი უნდა ცვლიდეს ტრანსპორტის ფერს.
◼ მოახდინეთ color არგუმენტის ვალიდაცია(უნდა იყოს String ტიპის)
ინფორმაცია ტრანსპორტზე getInfo()
◼ მეთოდი უნდა აბრუნებდეს ტრანსპორტის შესახებ ინფორმაციას: 
    'ეს არის რაღაც ტრანსპორტი, რომლის მაქს. სიჩქარეა - ${maxSpeed}; ფერი - ${color}; საწვავის რაოდენობა - ${fuel}; განვლილი მანძილი - ${distanceTraveled}'
გადაადგილება move(distance, fuelNeeded)
◼ ეს მეთოდი გადაადგილებს ტრანსპორტს გარკვეული მანძილით(distance) და ამისთვის ხარჯავს გარკვეული რაოდენობის საწვავს(fuelNeeded).
◼ მოახდინეთ არგუმენტების ვალიდაცია(ორივე უნდა იყოს Number ტიპის).
◼ შეამოწმეთ აქვს თუ არა ტრანსპორტს საკმარისი საწვავი მითითებული მანძილის სრულად დასაფარად.
◼ თუ ტრანსპორტს აღმოაჩნდა საკმარისი საწვავი - განახორციელეთ გადაადგილება(შეცვალეთ ობიექტის distanceTraveled თვისება)
◼ თუ საკმარისი საწვავი არ არის მეთოდმა დააბრუნოს ერორი(განახორციელეთ თქვენ როგორც გინდათ)
--- --- --- --- ---
 ამის შემდეგ შექმენით შვილეული კლასები - მაგ. (Car, Plane, Boat და ა.შ.), რომლებიც მემკვიდრეობით მიიღებენ Transport კლასის თვისებებსა და მეთოდებს.
◼ შვილეულ კლასებს შეუცვალეთ getInfo მეთოდი.
◼ Car კლასის შემთხვევაში getInfo მეთოდმა უნდა დააბრუნოს:
    'ეს არის რაღაც მანქანა, რომლის მაქს. სიჩქარეა - ${maxSpeed}; ფერი - ${color}; საწვავის რაოდენობა - ${fuel}; განვლილი მანძილი - ${distanceTraveled}' */

class Transport {
    constructor(maxSpeed, color, fuel) {
        this.maxSpeed = maxSpeed,
            this.color = color,
            this.fuel = fuel,
            this.distanceTraveled = 0
    }
    refuel(liter) {
        if (typeof liter !== 'Number' || liter < 0) {
            console.log('None')
        } else {
            this.fuel += liter
        }
    }
    changeColor(color) {
        if (typeof color === 'String') {
            this.color = color
        } else {
            console.log('None')
        }
    }
    getInfo() {
        return `ეს არის რაღაც ტრანსპორტი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`
    }
    move(distance, fuelNeeded) {
        if (fuelNeeded > this.fuel) {
            console.log('Ar aris sakmarisi')
        } else {
            this.fuel -= fuelNeeded
            this.distanceTraveled += distance
        }
    }
}
class Bike extends Transport {
    constructor(maxSpeed, color, fuel) {
        super(maxSpeed, color, fuel)
    }
    getInfo() {
        return `ეს არის რაღაც ბაიკი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`
    }
}