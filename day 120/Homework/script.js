/*  Level 120: 
 შექმენით OrderManager კლასი, რომელსაც ექნება: 
 --- თვისებები --- 
 activeOrders: Map - ობიექტის შექმნისას ცარიელი მაპი
 completedOrders: Set - ობიექტის შექმნისას ცარიელი სეტი
 activeOrders მაპი შეინახავს აქტიურ შეკვეთებს სადაც key იქნება orderId: Number, ხოლო value იქნება customerName: String
 completedOrders სეტი კი იმ მომხმარებლების სახელებს შეინახავს, რომლების შეკვეთებიც შევასრულეთ.
 --- მეთოდები --- 
 processOrder(orderId, customerName, callback) 
 printStatus()
 printStatus მეთოდი კონსოლზე ბეჭდავს ყველა აქტიურ შეკვეთას(activeOrders) და ყველა დასრულებულ შეკვეთას(completedOrders). გამოიყენეთ ლუპი ანდა დესტრუქცია
 processOrder მეთოდი ქმნის შეკვეთას(ამატებს activeOrdersში), კონსოლზე გამოაქვს შეტყობინება, რომ ახალი შეკვეთა მივიღეთ და 3 წამით ამუშავებს შეკვეთას (setTimeout)
 setTimeout ის შიგნით:
    1)ამოშალეთ შეკვეთა activeOrdersდან და მომხმარებლის სახელი შეინახეთ completedOrders სეტში 
    2)გამოიძახეთ callBack ფუნქცია(დააბეჭდინეთ, რომ ესა და ეს შეკვეთა შესრულდა)
    3)გამოიძახეთ printStatus მეთოდი
 callBack(orderId) ფუნქცია შექმენით კლასის გარეთ და შემდეგი რამ დააბეჭდინეთ კონსოლზე: 'შეკვეთა #${orderId} დამთავრდა'
 ამის შემდეგ შექმენით OrderManager კლასის ობიექტი და გააკეთეთ რამოდენიმე შეკვეთა განსხავებული id და სახელებით  */

// class OrderManager {
//     constructor() {
//         this.activeOrders = new Map()
//         this.completedOrders = new Set()
//     }
//     processOrder(orderId, customerName, callBack) {
//         this.activeOrders.set(orderId, customerName)
//         console.log(`მომხმარებლის აიდია ${orderId} სახელი ${customerName} მზადების პროცესშია`)

//         setTimeout(() => {
//             this.activeOrders.delete(orderId)
//             completedOrders.set(customerName)
//             callBack(callback)
//         }, 3000)

//     }
//     printStatus() {
//         if (this.activeOrders.size === 0) {
//             console.log('არ არის შეკვეთები')
//         } else {
//             console.log('დასრულებული შეკვეთები')
//             for (let name of this.completedOrders) {
//                 console.log(name)
//             }
//             console.log('პროცესში მყოფი შეკვეთები')
//             for (let comp of this.activeOrders) {
//                 console.log(comp)
//             }
//         }
//     }
// }
// function callback(){
//     console.log(`შეკვეთა ${this.orderId} დამთავრდა`)
// }
// let cosumer1 = new OrderManager(1, 'Ana')
// console.log(cosumer1)

class OrderManager {
    constructor(activeOrders, completedOrders) {
        this.activeOrders = activeOrders
        this.completedOrders = completedOrders
    }

    printStatus() {
        console.log('აქტიური <--- შეკვეთები --->')
        let arr = [...this.activeOrders]
        arr.map(item => {
            console.log(item[0], item[1])
        })
    }
    processOrder(orderId, costumetName, callBack) {
        this.activeOrders.set(orderId, costumetName)
        this.printStatus()

        console.log('შეკვეთა მიღებულია')
        setTimeout(() => {
            console.log(costumetName)
            this.completedOrders.add(costumetName)
            this.activeOrders.delete(orderId)
            console.log('შეკვეთა დასრულდა')

            callBack(orderId)
            costumetName
            this.printStatus()
        }, 300)
    }
}

let orderN1 = new OrderManager(new Map([[1, 'Ana'], [2, 'Gio'], [3, 'Nini']]))
console.log(orderN1)