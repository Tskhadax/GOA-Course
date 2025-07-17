let userIcone = document.querySelector('i')
let userInfo = document.querySelector('#task')

let currentUser = JSON.parse(localStorage.getItem('current-user'))

let name = currentUser.name
let surname = currentUser.surname
let username = currentUser.username
let email = currentUser.email

let nameLi = document.createElement('li')
let surnameLi = document.createElement('li')
let usernameLi = document.createElement('li')
let emailLi = document.createElement('li')
let createBtn = document.createElement('button')

let ul = userInfo.querySelector('ul') || document.createElement('ul')

nameLi.textContent = `Name: ${name}`
surnameLi.textContent = `Surname: ${surname}`
usernameLi.textContent = `Username: ${username}`
emailLi.textContent = `Email: ${email}`
createBtn.textContent = 'Exit'

ul.appendChild(nameLi)
ul.appendChild(surnameLi)
ul.appendChild(usernameLi)
ul.appendChild(emailLi)
ul.appendChild(createBtn)

userInfo.appendChild(ul)

let isOpen = false
userIcone.addEventListener('click', () => {
    if (!isOpen) {
        userInfo.style.transform = 'translateY(0)'
        isOpen = true
    } else {
        userInfo.style.transform = 'translateY(-300px)'
        isOpen = false
    }
})

createBtn.addEventListener('click', ()=> {
    currentUser = null
    localStorage.setItem('current-user', currentUser)
    window.location.href = './index.html'
})