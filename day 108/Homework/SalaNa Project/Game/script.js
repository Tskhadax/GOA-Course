let gamer = document.querySelector('#user')
let rock = document.querySelector('#rock')
let jumpButton = document.querySelector('button')

let avatar1 = document.querySelector('.user1')
let avatar2 = document.querySelector('.user2')
let avatar3 = document.querySelector('.user3')

let isGameStarted = false;

// Jump 
let jump = () => {
    gamer.classList = 'jumpUser'
    setTimeout(function () {
        gamer.classList = ''
    }, 500)
}

// dawyeba
let message = document.querySelector('#message')
let score = parseInt(localStorage.getItem('userScore')) || 0
let userScore = document.querySelector('#score')
userScore.textContent = score

jumpButton.addEventListener('click', function () {
    jumpButton.textContent = 'Jump'
    userScore.textContent = 0
    score = 0
    jumpButton.style.backgroundColor = 'orange'
    rock.classList = 'rock'

    if (!isGameStarted) {
        isGameStarted = true

        let checkIfLost = setInterval(() => {
            let gamerPosition = gamer.getBoundingClientRect()
            let rockPosition = rock.getBoundingClientRect()

            if (
                gamerPosition.right > rockPosition.left &&
                gamerPosition.left < rockPosition.right &&
                gamerPosition.bottom > rockPosition.top &&
                gamerPosition.top < rockPosition.bottom
            ) {
                rock.classList = 'None'
                message.textContent = 'YOU LOST'
                message.style.color = 'red'
                clearInterval(checkIfLost)
                isGameStarted = false
                localStorage.setItem('userScore', JSON.stringify(score))
                setTimeout(function () {
                    location.reload()
                }, 3000)
            } else {
                score++
                userScore.textContent = score
            }
        }, 50)
    }

    jump()
})

// enterit axtoma
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        jump()
    }
})

// motamashis archeva
avatar1.addEventListener('click', function () {
    gamer.style.borderRadius = '50%'
    gamer.style.backgroundColor = 'rgb(34, 0, 128)'
    gamer.innerHTML = ''
})

avatar2.addEventListener('click', function () {
    gamer.style.borderRadius = '5px'
    gamer.style.backgroundColor = 'rgb(176, 203, 0)'
    gamer.innerHTML = ''
})

avatar3.addEventListener('click', function () {
    let question = prompt("Enter secret code")
    if (question === 'xinkali') {
        let image = document.createElement('img')
        image.style.width = '100px'
        image.style.height = '100px'
        image.src = 'https://i.pinimg.com/originals/9f/3d/f2/9f3df290da34dfd632472b8d946ba97a.gif'
        gamer.innerHTML = ''
        gamer.appendChild(image)
        gamer.style.background = 'none'
    } else {
        alert("Not correct Password")
    }
})
