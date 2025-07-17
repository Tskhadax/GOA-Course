
let addButton = document.querySelector('#Add')
let userInput = document.querySelector('input')
let list = document.querySelector('.user-list')
let errorMessage = document.querySelector('span')
let fullList = JSON.parse(localStorage.getItem('userList')) || [];

let image = document.getElementById('profile2')
image.src = localStorage.getItem('User-Image')
let userIcon = document.getElementById('userIcon')
let profile = document.getElementById('profile2')

// Task 01
if (image.src !== '../image/Screenshot 2025-06-01 211812.png') {
    userIcon.style.display = 'none'
    profile.src = image.src
}
// Add Button Funct
let user = () => {
    if (userInput.value.trim() !== '') {

        userInput.style.borderColor = 'grey'
        errorMessage.textContent = ''

        // create 
        let userList = document.createElement("div")
        userList.className = 'element'

        let paragraph = document.createElement('p')
        paragraph.textContent = userInput.value.trim()

        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'

        userList.appendChild(paragraph)
        userList.appendChild(deleteButton)
        list.appendChild(userList)



        // siashi damateba
        fullList.push(paragraph.textContent)
        console.log(fullList)

        userInput.value = ''
        localStorage.setItem('userList', JSON.stringify(fullList))


        // remove from list button func
        deleteButton.addEventListener('click', function () {
            let findIndex = fullList.indexOf(paragraph.textContent)
            fullList.splice(findIndex, 1)
            console.log(fullList)
            list.removeChild(userList)
            localStorage.setItem('userList', JSON.stringify(fullList))
        })

    } else {
        userInput.style.borderColor = 'red'
        errorMessage.textContent = "You Can't Add Space In Your List"
    }
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        user()
    }
})
addButton.addEventListener('click', user)

for (let element of fullList) {
    let userList = document.createElement("div")
    userList.className = 'element'

    let paragraph = document.createElement('p')
    paragraph.textContent = element.trim()

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'

    userList.appendChild(paragraph)
    userList.appendChild(deleteButton)
    list.appendChild(userList)

    deleteButton.addEventListener('click', function () {
        let findIndex = fullList.indexOf(paragraph.textContent)
        fullList.splice(findIndex, 1)
        console.log(fullList)
        list.removeChild(userList)
        localStorage.setItem('userList', JSON.stringify(fullList))
    })
}