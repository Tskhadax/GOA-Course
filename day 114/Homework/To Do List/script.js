// form change model
let formChange = document.querySelector('#form-change')
let ad = document.querySelector('#reklama')
let loginForm = document.querySelector('.login')
let registrationForm = document.querySelector('.registration')
let language = JSON.parse(localStorage.getItem('Language')) || 'Eng'

let formModel = 'Sing Up'

let formChangeFunction = () => {
    if (formModel === 'Log in') {
        // Task 001
        formModel = 'Sing Up'

        // Task 002
        ad.style.transform = 'translate(90%)'
        ad.style.paddingRight = '150px'

        // Task 003
        loginForm.style.transform = 'translate(-12%)'
        registrationForm.style.transform = 'translate(0%)'

        // Task 004

        if (language === 'Eng') {
            ad.children[1].innerHTML = "Do you already have an account? Well, you've been organized. Go to your page, what are you waiting for!"
        } else if (language === 'Geo') {
            ad.children[1].innerHTML = 'გაქვს უკვე ექაუნთი? ორგანიზებული ჩადი ყოფილხარ, გადადი შენს გვერდზე რას უცდი'
        }
        // 


    } else {
        // Task 001
        formModel = 'Log in'

        // Task 002
        ad.style.transform = 'translate(-70px)'
        ad.style.paddingRight = '70px'

        // Task 003
        loginForm.style.transform = 'translate(0%)'
        registrationForm.style.transform = 'translate(12%)'

        // Task 004
        if (language === 'Eng') {
            ad.children[1].innerHTML = "This site is a helpful guide to help you organize your notes and tasks. Not registered? What are you waiting for? Register now!"
        } else if (language === 'Geo') {
            ad.children[1].innerHTML = 'ეს საიტი დაგეხმარებათ დავალებების ორგანიზებაში. არ გაქვთ ანგარიში? რეგისტრაცია გაიარე!'
        }
    }
}
// sastartod chatvirtva
formChangeFunction()
formChange.addEventListener('click', formChangeFunction)

// enebis shecvla + local storage

let languageChange = document.querySelector('.curent')
let optionLanguage = document.querySelector('#enebi')
let open = false

languageChange.addEventListener("click", () => {
    if (!open) {
        optionLanguage.style.transform = 'translateY(0)'
        open = true
    } else {
        optionLanguage.style.transform = 'translateY(-200px)'
        open = false
    }
})
// for translate

// let language = JSON.parse(localStorage.getItem('Language')) || 'Eng';

// for translate
let title = document.getElementsByTagName('h2')
let h1 = document.getElementsByTagName('h1')[1]
let submit = document.getElementsByTagName('button')
let p = document.getElementsByTagName('p')

//translate
function translateLanguage(lang) {
    if (lang === 'Eng') {
        title[0].textContent = 'Sign Up'
        title[1].textContent = 'Log In'
        submit[0].textContent = 'Start'
        submit[1].textContent = 'Submit'
        submit[2].textContent = 'Submit'
        h1.textContent = 'Hello User!'
        p[0].textContent = 'This site is a helpful guide to help you organize your notes and tasks. Not registered? What are you waiting for? Register now!'
        p[1].innerHTML = 'You have account? Then <a href="#login"">Log in</a>'

        languageChange.src = "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg"
        languageChange.id = 'Geo'


        optionLanguage.children[0].querySelector('img').src = 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg'
        optionLanguage.children[0].querySelector('strong').textContent = 'ქართული'
        languageChange.src = "https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"


    } else if (lang === 'Geo') {
        title[0].textContent = 'რეგისტრაცია'
        title[1].textContent = 'შესვლა'
        submit[0].textContent = 'დაწყება'
        submit[1].textContent = 'გაგზავნა'
        submit[2].textContent = 'გაგზავნა'
        h1.textContent = 'გამარჯობა!'
        p[0].textContent = 'ეს საიტი დაგეხმარებათ დავალებების ორგანიზებაში. არ გაქვთ ანგარიში? რეგისტრაცია გაიარე!'
        p[1].innerHTML = 'გაქვს ანგარიში? მაშინ <a href="#login">Log in</a>'

        languageChange.id = 'Eng'

        optionLanguage.children[0].querySelector('strong').textContent = 'English'
        optionLanguage.children[0].querySelector('img').src = "https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
        languageChange.src = "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg"


    }

    language = lang
    localStorage.setItem('Language', JSON.stringify(language))
}


// Shemowmeba
function optionLanguaFun() {
    optionLanguage.addEventListener('click', (event) => {
        if (language === 'Geo') {
            translateLanguage('Eng')
        } else if (language === 'Eng') {
            translateLanguage('Geo')
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    let savedLang = JSON.parse(localStorage.getItem('Language')) || 'Eng'
    translateLanguage(savedLang)
})

optionLanguaFun()




// registratia
let regUsername = document.getElementById('registration-username')
let regEmail = document.getElementById('registration-email')
let regPassword = document.getElementById('registration-password')

let allUser = JSON.parse(localStorage.getItem('RegistrationUsers')) || []

let message = document.getElementsByClassName('massage-singUp')
let regForm = document.getElementsByTagName('form')[0]
let messageBox = document.querySelector('#message')

regForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Rask 002
    for (let i = 0; i < message.length; i++) {
        message[i].textContent = ''
        message[i].parentElement.querySelector('input').style.border = '1.5px solid grey'
    }

    let hasError = false

    // Username 
    if (regUsername.value.trim() === '') {
        message[0].textContent = "Username cannot be empty or contain only spaces."
        message[0].parentElement.querySelector('input').style.border = '1.5px solid red'
        hasError = true
    }

    // Email 
    if (regEmail.value.trim() === '') {
        message[1].textContent = "Email cannot be empty or contain only spaces."
        message[1].parentElement.getElementsByTagName('input')[1].style.border = '1.5px solid red'
        hasError = true
    }

    // Password 
    if (regPassword.value.length < 8) {
        message[2].textContent = "Password must be at least 8 characters."
        message[1].parentElement.getElementsByTagName('input')[2].style.border = '1.5px solid red'
        hasError = true
    }

    // Task 003
    for (let user of allUser) {
        if (user.Username === regUsername.value) {
            message[0].textContent = 'This username is already registered.'
            message[0].parentElement.querySelector('input').style.border = '1.5px solid red'
            hasError = true
        }
        if (user.Email === regEmail.value) {
            message[1].textContent = 'This email is already registered.'
            message[1].parentElement.getElementsByTagName('input')[1].style.border = '1.5px solid red'
            hasError = true
        }
    }
    if (!hasError) {

        allUser.push({
            Username: regForm.getElementsByTagName('input')[0].value,
            Email: regForm.getElementsByTagName('input')[1].value,
            Password: regForm.getElementsByTagName('input')[2].value,
        })
        console.log(allUser)
        if (language === 'Eng') {
            messageBox.innerHTML = " <strong> Registration Sucsessful ! <br> Now You can Log In In Your Page! </strong>"
        } else {
            messageBox.innerHTML = '<strong>რეგისტრაცია წარმატებით შესრულდა! <br> შედი შენს გვერდზე </strong>'
        }

        messageBox.style.borderColor = '#0f0'
        messageBox.style.color = '#0f0'

        localStorage.setItem('RegistrationUsers', JSON.stringify(allUser))
    } else {
        messageBox.style.borderColor = 'red'
        messageBox.style.color = 'red'

        if (language === 'Eng') {
            messageBox.innerHTML = '<strong>Registration Is not sucsessful! <br> Check Reason! </strong>'
        } else {
            messageBox.innerHTML = '<strong>რეგისტრაცია ვერ მოხერხდა <br> შეამოწმე მიზეზი </strong>'
        }


    }
    messageBox.style.transform = 'translateY(5px)'
    setTimeout(() => {
        messageBox.style.transform = 'translateY(-300px)'
    }, 5000)
})
// localStorage.clear()
// form for login
loginForm
let messageLogin = document.getElementsByClassName('massage-logIn')
let loginUsername = loginForm.getElementsByTagName('input')[0]
let loginPassword = loginForm.getElementsByTagName('input')[1]
JSON.parse(localStorage.getItem('curentUser'))

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputColection = loginForm.getElementsByTagName('input')

    for (let inp of inputColection) {
        inp.style.border = '1px solid grey'
    }
    let loginIn = false
    allUser.map(item => {
        if (item.Username === loginUsername.value && loginPassword.value === item.Password) {
            window.location.href = './to do list.html'
            loginIn = true
        }
    })
    if (!loginIn) {
        if (language === 'Eng') {
            messageBox.innerHTML = " <strong> Username or password <br> is not correct </strong>"
        } else {
            messageBox.innerHTML = '<strong>მომხმარებლის სახელი ან პაროლი <br> არასწორია</strong>'
        }


        for (let inp of inputColection) {
            inp.style.border = '1px solid red'
        }

        messageBox.style.borderColor = '#f00'
        messageBox.style.color = '#f00'

    }
    messageBox.style.transform = 'translateY(5px)'
    setTimeout(() => {
        messageBox.style.transform = 'translateY(-300px)'
    }, 5000)

    let curent = [
        regForm.getElementsByTagName('input')[0].value,
        regForm.getElementsByTagName('input')[1].value,
        regForm.getElementsByTagName('input')[2].value,
    ] || null
    localStorage.setItem('curentUser', JSON.stringify(curent))

})
// model change
let icon = document.querySelector('.icon')
let model = JSON.parse(localStorage.getItem('model')) || 'model-1'
let modelChange = (info) => {
    if (info === 'model-2') {
        document.querySelector('header').style.backgroundColor = 'black'
        document.querySelector('header').style.boxShadow = ' 0px 3px 5px  #28002b'
        document.querySelector('main').style.background = 'linear-gradient(black, #28002b)'
        document.querySelector('body').style.color = 'white'
        reklama.querySelector('img').src = 'https://i.pinimg.com/736x/58/ef/b4/58efb4accc3005eb90012e92ba676602.jpg'
        model = 'model-1'
        localStorage.setItem('model', JSON.stringify(model))
        reklama.querySelector('h1').className = 'h1-model1'
        reklama.querySelector('p').style.color = '#cb5358'
        optionLanguage.style.background = 'linear-gradient(rgb(0, 0, 0), rgb(22, 0, 18))'
        formChange.style.backgroundColor = 'rgb(54, 1, 21)'
        formChange.style.color = 'white'
    } else {
        document.querySelector('header').style.backgroundColor = 'rgb(2, 0, 0)'
        document.querySelector('main').style.background = 'linear-gradient(black,rgb(121, 0, 0))'
        document.querySelector('body').style.color = 'rgb(255, 180, 180)'
        reklama.querySelector('img').src = './image/red.png'
        document.querySelector('header').style.boxShadow = ' 0px 3px 5px rgb(64, 14, 14)'
        model = 'model-2'
        reklama.querySelector('p').style.color = 'rgb(255, 191, 191)'
        localStorage.setItem('model', JSON.stringify(model))
        reklama.querySelector('h1').className = 'h1-model2'
        optionLanguage.style.background = 'linear-gradient(black, rgb(92, 0, 0))'
        formChange.style.backgroundColor = 'red'
        formChange.style.color = 'white'
    }

}
icon.addEventListener('click', () => {
    modelChange(model)
})
let modelInfo = () => {
    if (model == 'model-1') {
        modelChange('model-2')
    } else {
        modelChange('model-1')
    }
}
modelInfo()