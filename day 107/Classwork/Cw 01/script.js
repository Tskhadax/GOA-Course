// 1) შექმენით ფუნქცია, რომელიც მიიღებს n რაოდენობის რიცხვს და გაიგებს მათ ჯამს.

// ფუნქციას გამოძახებისას უნდა გადასცეთ მინიმუმ 5 არგუმენტი. პირველი და მეორე არგუმენტები შეინახეთ ცვლადებში და დაბეჭდეთ მათი ნამრავლი, ხოლო სხვა დანარჩენი rest ოპერატორის გამოყენებით ჩასვით სიაში და დაბეჭდეთ მათი ჯამი

let myFunct = (first, second, ...userNum) => {

    // namravli
    console.log(first * second)

    // jami
    let userArr = Array(userNum)
    let sum = 0
    for (let num of userNum){
        sum += num
    }
    console.log(sum)
}
myFunct(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
