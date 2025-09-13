let nav = document.querySelector('#menu')
let isOpen = false
let navTask = document.querySelector('.icons')

nav.addEventListener('click', () => {
    isOpen = !isOpen
    if (isOpen) {
        navTask.style.transition = '0.5s'
        navTask.style.display = 'flex'
        navTask.style.transform = 'translateX(0px)'
        nav.classList = 'fa-solid fa-xmark'
    } else {
        navTask.style.transform = 'translateX(500px)'
        nav.classList = "fa-solid fa-bars"
    }
})