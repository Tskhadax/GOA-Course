// 2) დაამატეთ საიტზე ღილაკი როდესაც ამ ღილაკს დააჭერთ მომხმარებელს შემოატანინეთ სახელი, გვარი, ასაკი და მეილი ამ მონაცემების შექმენით ობიექტი შეგიძლიათ გამოიყენოთ კონსტრუქტორი, ეს ობიექტი დაამატეთ სიაში და შექმენით ექაუნთები, ეს ინფორმაცია უნდა ინახებოდეს localstorage ში, ყოველ ღილაკზე დაჭერის დროს უნდა შეიქმნას ახალი ექაუნთი(ობიექტი), დაემატოს ექაუნთებისთვის განკუთვნილ სიაში და განახლდეს localstorage


let Name = document.getElementById('name')
let surname = document.getElementById('surname')
let age = document.getElementById('age')
let email = document.getElementById('email')
let button = document.querySelector('button')

let accs = []

button.addEventListener('click', function(){
    newAcc = {
        name: Name.value,
        surname: surname.value,
        age: age.value,
        email: email.value,
    }

    accs.push(newAcc)
    console.log(accs)

    localStorage.setItem('acc', JSON.stringify(accs))
})
