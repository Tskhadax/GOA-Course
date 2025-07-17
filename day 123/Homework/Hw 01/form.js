// Task 000 (ცვლადების შექმნა)
let registrationUsers = JSON.parse(localStorage.getItem('users')) || []

let singUp = document.querySelector('#singup-form')
let logIn = document.querySelector('#login-form')

let singUpSection = document.querySelector('#singup')
let logInSection = document.querySelector('#login')

let singUpMessage = singUp.querySelectorAll('.message')
let logInMessage = logIn.querySelectorAll('.message')

let singInBtn = document.querySelector('#singInBtn')
let logInBtn = document.querySelector('#SingUpBtn')

for (let index = 0; index < singUpMessage.length; index++) {
    singUpMessage[index].innerHTML = ''
}

let isLoginForm = JSON.parse(localStorage.getItem('isLoginForm')) || false

let nextPage = () => {
    if (!isLoginForm) {
        logInSection.style.transform = 'translate(-100%)'
        isLoginForm = true
    } else {
        logInSection.style.transform = 'translate(100%)'
        isLoginForm = false
    }
}
singInBtn.addEventListener('click', nextPage)
logInBtn.addEventListener('click', nextPage)

// registracia
singUp.addEventListener('submit', (e) => {
    e.preventDefault()
    for (let index = 0; index < singUpMessage.length; index++) {
        singUpMessage[index].innerHTML = ''
    }
    let registration = true

    // check values:
    for (let item of '1234567890.') {
        if (e.target.Name.value.includes(item)) {
            singUpMessage[0].innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Don't use '1234567890.' in your name"
            registration = false
        }
        if (e.target.Surname.value.includes(item)) {
            singUpMessage[1].innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>   Don't use '1234567890.' in your surname"
            registration = false
        }
    }
    for (let user of registrationUsers) {
        if (user.username === e.target.Username.value) {
            singUpMessage[3].innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> This user alredy exit"
            registration = false
            break
        } if (user.email === e.target.Email.value) {
            singUpMessage[2].innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> This user alredy exit"
            registration = false
            break
        }
    }
    if (e.target.Password.value.length <= 8) {
        singUpMessage[4].innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Your password must be more ther 8 symbol"
        registration = false
    }
    if (registration) {
        let user = {
            name: e.target.Name.value,
            surname: e.target.Surname.value,
            username: e.target.Username.value,
            password: e.target.Password.value,
            email: e.target.Email.value
        }
        registrationUsers.push(user)
        singUpMessage[5].innerHTML = 'Registration sucsessful'
        localStorage.setItem('users', JSON.stringify(registrationUsers))
        setTimeout(nextPage, 3000)
    }
})

// shesvla
for (let index = 0; index < logInMessage.length; index++) {
    logInMessage[index].innerHTML = ''
}

let curentUser = null

logIn.addEventListener('submit', (e) => {
    e.preventDefault()

    let loginEmail = logIn.querySelectorAll('input')[0]
    let loginUsername = logIn.querySelectorAll('input')[1]
    let loginPassword = logIn.querySelectorAll('input')[2]

    let userFound = false

    for (let user of registrationUsers) {
        if (user.email === loginEmail.value && user.username === loginUsername.value && user.password === loginPassword.value) {
            curentUser = user
            window.location.href = './main.html'
            curentUser = user
            localStorage.setItem('current-user', JSON.stringify(curentUser))
            userFound = true
        }
    }
    if (!userFound){
        logInMessage[2].innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Not found this user'
    }
})