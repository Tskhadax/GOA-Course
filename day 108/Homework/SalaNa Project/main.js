document.addEventListener('DOMContentLoaded', function () {


    let image = document.getElementById('profile2')
    image.src = localStorage.getItem('User-Image')
    let userIcon = document.getElementById('userIcon')
    let profile = document.getElementById('profile2')
    let user = document.querySelector('#user-name')

    // Task 01
    if (image.src !== '../image/Screenshot 2025-06-01 211812.png') {
        userIcon.style.display = 'none'
        profile.src = image.src


    }
    // 
    let menu = document.querySelector('#menu')
    let menuTask = document.querySelector('#navigation')
    let isOpen = false
    menu.addEventListener('click', () => {
        if (!isOpen) {
            menuTask.style.right = '0%'
            menu.style.transfrorm = 'rotate(90deg)'
            menu.className = "fa-solid fa-xmark"
            isOpen = true
        } else {
            menuTask.style.right = '-100%'
            isOpen = false;
            menu.className = 'fa-solid fa-bars'
        }
    })


    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if (!currentUser) {
        alert("No logged-in user found. Redirecting to login...")
        window.location.href = "../Log in/index.html"
    }

    const fullName = `${currentUser.name[0].toUpperCase()} . ${currentUser.lastname[0].toUpperCase()}`
    document.getElementById('user-name').textContent = fullName

    const profileImage = localStorage.getItem('User-Image') || '../image/Screenshot 2025-06-01 211812.png'
    document.getElementById('profile2').src = profileImage

})
document.querySelectorAll('input').forEach(input => {
  input.setAttribute('autocomplete', 'off')
})