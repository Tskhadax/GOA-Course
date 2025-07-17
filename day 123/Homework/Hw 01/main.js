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
createBtn.textContent = 'Log out'

ul.appendChild(nameLi)
ul.appendChild(surnameLi)
ul.appendChild(usernameLi)
ul.appendChild(emailLi)
ul.appendChild(createBtn)

userInfo.appendChild(ul)

let isOpen = false
isOpenFunc1 = () => {
    if (!isOpen) {
        userInfo.style.transform = 'translateY(0)'
        isOpen = true
    } else {
        userInfo.style.transform = 'translateY(-300px)'
        isOpen = false
    }
}
userIcone.addEventListener('click', isOpenFunc1)

let messageBox = document.querySelector('.messageBox')
let Blur = document.querySelector('.blur')

createBtn.addEventListener('click', () => {
    messageBox.innerHTML = ''
    Blur.style.width = '100%'
    Blur.style.height = '100%'
    Blur.style.backdropFilter = 'blur(3px)'
    Blur.style.position = 'absolute'
    Blur.style.zIndex = '4'
    Blur.style.transition = '0.5s'
    Blur.style.backgroundColor = 'rgba(0, 0, 0, 0.89)'
    Blur.style.display = 'flex'
    Blur.style.alignItems = 'center'
    Blur.style.justifyContent = 'center'

    messageBox.style.width = '300px'
    messageBox.style.height = '200px'
    messageBox.style.borderRadius = '3px'
    messageBox.style.border = '1px solid rgb(0, 170, 255)'
    messageBox.style.transition = '0.9s'
    messageBox.style.backgroundColor = 'rgb(10, 10, 10)'

    let h3 = document.createElement('h3')
    let yes = document.createElement('button')
    let no = document.createElement('button')
    let div = document.createElement('div')

    h3.textContent = 'Log out of your account?'
    yes.textContent = 'Log out'
    no.textContent = 'Cancel'

    div.appendChild(no)
    div.appendChild(yes)

    messageBox.appendChild(h3)
    messageBox.appendChild(div)

    yes.addEventListener('click', () => {
        currentUser = null
        localStorage.setItem('current-user', currentUser)
        window.location.href = './index.html'
    })
    no.addEventListener('click', () => {
        Blur.style.zIndex = '-4'
        Blur.style.display = 'none'
    })

})

let shopList = document.querySelector('.fa-cart-shopping')

let shopListOpen = false
let userMenu = document.querySelector('.userMenu')

shopList.addEventListener('click', () => {
    if (!shopListOpen) {
        userMenu.style.transform = 'translateX(0)'
        shopListOpen = true
    } else {
        userMenu.style.transform = 'translateX(100%)'
        shopListOpen = false
    }
})
// დამატება.

let main = document.querySelector('main')
let List = document.querySelector('.List')

let userList = JSON.parse(localStorage.getItem('user list')) || []

let count = userList.length

let secondsSpan = document.querySelector('.Time')
let countSpan = document.querySelector('.count')

let func1 = () => {
    main.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'button') {
            let productInfo = e.target.parentElement.parentElement
            console.log(productInfo)

            let item = document.createElement('div')
            item.classList = 'product-in-list'

            let productName = productInfo.querySelectorAll('p')[0]
            let productPrice = productInfo.querySelectorAll('p')[1]
            let productTime = productInfo.querySelectorAll('p')[2]
            let productRaodenoba = productInfo.querySelector('input')
            let deleteBtn = '<i class="fa-solid fa-trash"></i>'

            let user = {
                name: productName.textContent,
                price: productPrice.textContent,
                time: productTime.textContent,
                raodenoba: productRaodenoba.value
            }

            item.innerHTML = `${user.name} <br>Price: ${productPrice.textContent.split(':')[1].split('$')[0]}   X   ${productRaodenoba.value}  === ${productPrice.textContent.split(':')[1].split('$')[0] * productRaodenoba.value}$ <br>Time: ${user.time.split(':')[1].split('sec')[0]}   X   ${productRaodenoba.value}  === ${productRaodenoba.value * user.time.split(':')[1].split('sec')[0]} sec ${deleteBtn}`

            List.appendChild(item)

            userList.push(user)
            console.log(productPrice.textContent.split(':')[1].split('$')[0] * 3)
            console.log(productTime.textContent.split(':')[1].split('sec')[0] * 3)
            console.log(productRaodenoba.value)

            localStorage.setItem('user list', JSON.stringify(userList))

            count++
            countSpan.innerHTML = `Item: ${count}`

            let remove = item.querySelector('i')
            remove.addEventListener('click', () => {
                userList = userList.filter(obj =>
                    !(obj.name === user.name &&
                        obj.price === user.price &&
                        obj.time === user.time &&
                        obj.raodenoba === user.raodenoba)
                )
                // userList.splice(index, 1)
                localStorage.setItem('user list', JSON.stringify(userList))
                func1()
            })
        }
    })
}

func1()