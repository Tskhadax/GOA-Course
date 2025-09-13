// 5️⃣ შექმენი Promise, რომელიც აბრუნებს ინფორმაციას მომხმარებლის შესახებ. პრომისი უნდა აბრუნებდეს ინფორმაციას მომხმარებლის შესახებ( მისი სახელი, გვარი, ასაკი, სქესი და ა.შ.) ობიექტის სახით. პრომისი შიგნით შექმენით ორი ცვლადი: isUserFound და timeToFindUser. პირველში, რანდომულად დააგენერეითეთ 0 ან 1, ხოლო მეორეში რიცხვი 0 დან 10 მდე. Promise მომხმარებლის ინფორმაციას უნდა აბრუნებდეს იმ შემთხვევაში თუ isUserFound === 1 და ამას იმდენი წამი უნდა ანდომებდეს დროს(setTimeout) რამდენიც არის timeToFindUser_ში. თუ isUserFound აღმოჩნდა 0, მაშინ დაარეჯექთეთ რაიმე შეტყობინება. ამ პრომისზე გამოიძახეთ then მეთოდი, რომელსაც გადასცემთ ორ არგუმენტს. ერთ ფუნქციას, რომელიც დაბეჭდავს მომხმარებლის ინფორმაციას, ხოლო მეორე ფუნქციას, რომელიც დაბეჭდავს ერორს

let userInfo = () => {
    return new Promise((f1, f2) => {
        let user = {
            name: 'Ana',
            surname: 'Puturidze',
            age: 16,
            gender: 'F',
        }

        let isUserFound = Math.floor(Math.random() * 2)
        let timeToFindUser = Math.floor(Math.random() * 11)  * 1000

        console.log(isUserFound)
        console.log(timeToFindUser)

        setTimeout( () => {
            if (isUserFound) {
                f1(user)
            } else {
                f2('404')
            }
        }, timeToFindUser)

    })
}

userInfo().then(
    (value) => {
    console.log(value)
    },(value) => {
        console.log(`Error ${value} (Not found)`)
    })