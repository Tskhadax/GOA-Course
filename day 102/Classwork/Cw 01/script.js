//    1) დაამატეთ საიტზე ღილაკი როდესაც ამ ღილაკს დააჭერთ მომხმარებელს შემოატანინეთ სახელი და მიღებული დაამატეთ სიაში და ეს სია შეინახეთ localstorage ში, ყოველ ღილაკზე დაჭერის დროს და ახალი სახელის შეყვანის დროს სიაში დაემატოს ახალი ელემენტი და localstorage ში განახლდეს ინფორმაციას ხოლო ამის შემდეგ კონსოლში დაბეჭდეთ localstorage დან წამოღებული ინფორმაცია


let button = document.querySelector('button')
let myArr = JSON.parse(localStorage.getItem('key')) || []
let main = document.querySelector('#main')

button.addEventListener('click', function(){
    let input = prompt("Enter string: ")
    for (let i of myArr){
        if (i === input){
            input = prompt("Enter again")
        }
    }
    myArr.push(input)
    localStorage.setItem('key', JSON.stringify(myArr))
    console.log(JSON.parse(localStorage.getItem('key')))


    main.innerHTML = ''

    for (let a of myArr){
        let p = document.createElement('p')
        p.innerHTML = a

        main.appendChild(p)
    }
    
})

for (let a of myArr){
    let p = document.createElement('p')
    p.innerHTML = a

    main.appendChild(p)
}