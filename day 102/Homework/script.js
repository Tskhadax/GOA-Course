// Registration
// Task 1

let regName = document.getElementsByTagName('input')[0]
let regSurname = document.getElementsByTagName('input')[1]
let regUsername = document.getElementsByTagName('input')[2]
let regEmail = document.getElementsByTagName('input')[3]
let regPhone = document.getElementsByTagName('input')[4]
let regPassword = document.getElementsByTagName('input')[5]
let regRepeat = document.getElementsByTagName('input')[6]

let regSubmit = document.getElementsByTagName('input')[7]
let loginSubmit = document.getElementsByTagName('input')[11]

let message = document.querySelector('span')
let changeBtn = document.querySelector("#ChangeBtn")
let messageBox = document.querySelector('#hidden')
let msg = document.querySelector('#msg')
let message2 = document.querySelector('#message2')

// registration accs
let registrationAccs = JSON.parse(localStorage.getItem('Registration')) || []
    
// Task2
regSubmit.addEventListener('click', function(event){
    event.preventDefault()
    message.textContent = ''
    if ( regName.value.trim() == ' ' || regSurname.value.trim() == ' ' || regUsername.value.trim() == ' ' || regEmail.value.trim() == ' ' || regPhone.value.trim() == ' ' || (regPassword.value.trim().length >= 8 && regPassword.value.trim() !== regRepeat.value.trim()) ){

        message.style.color = 'red'
        message.textContent = 'Enter Your Information'

    }else{

        message.style.color = 'rgb(0, 255, 0)'
        message.textContent = 'Registration Sucsessful!'

        // create acc
        let newAcc = {
             Name: regName.value,
             Surname: regSurname.value,
             Username: regUsername.value,
             Email: regEmail.value,
             Phone: regPhone.value,
             Password: regPassword.value,
             Password2: regRepeat.value
        }

        registrationAccs.push(newAcc)

        registrationAccs

        // empty
        regName.value = ''
        regSurname.value = ''
        regUsername.value = ''
        regEmail.value = ''
        regPhone.value = ''
        regPassword.value = ''
        regRepeat.value = ''

        localStorage.setItem('Registration', JSON.stringify(registrationAccs))
    }
})


// login --> registration and registration --> login

let form = 'registration'

changeBtn.addEventListener('click', function(){
    
    if (form == 'registration'){
        messageBox.style.transform = 'translateX(-100%)'
        form = 'logIn'
        changeBtn.textContent = 'SingUp'
        messageBox.style.background = 'linear-gradient(rgb(0, 92, 93), rgb(0, 0, 67))'
        msg.textContent = "Don't you have account? Then"
    }else{
        messageBox.style.transform = 'translateX(0%)'
        changeBtn.textContent = 'LogIn'
        form = 'registration'
        messageBox.style.background = 'linear-gradient(rgb(31, 0, 31), rgb(0, 0, 67))'
        msg.textContent = 'Do you have account? Then'
    }

})

// Login

let loginEmail = document.getElementsByTagName('input')[8]
let loginUsername = document.getElementsByTagName('input')[9]
let loginPassword = document.getElementsByTagName('input')[10]

loginSubmit.addEventListener('click', function(event){

    event.preventDefault()
    message2.textContent = ''

    for (let userInfo of registrationAccs) {
        if (userInfo['Username'] === loginUsername.value &&
            userInfo['Email'] === loginEmail.value && 
            userInfo['Password'] === loginPassword.value){

            message2.textContent = 'Sucssesful Login'
            message2.style.color = 'rgb(0, 255, 0)'
        } 
        console.log(userInfo.Username)
        console.log(userInfo.Email)
        console.log(userInfo.Password)

    }

    if (message2.textContent !== 'Sucssesful Login'){
        message2.textContent = 'Error'
        message2.style.color = 'red'
    }

    
})
