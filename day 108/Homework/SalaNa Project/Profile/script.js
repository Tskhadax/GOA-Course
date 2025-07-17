document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if (!currentUser) {
        alert("No logged-in user found. Redirecting to login...")
        window.location.href = "../Log in/index.html"
    }

    const fullName = `${currentUser.name} ${currentUser.lastname}`
    document.getElementById('user-name').textContent = fullName

    const profileImage = localStorage.getItem('User-Image') || '../image/Screenshot 2025-06-01 211812.png'
    document.getElementById('userImg').src = profileImage
    document.getElementById('profile2').src = profileImage

    document.querySelector("input[name='name']").value = currentUser.name
    document.querySelector("input[name='surname']").value = currentUser.lastname
    document.querySelector("input[type='email']").value = currentUser.email
    document.querySelector("input[type='password']").value = currentUser.password

    let userIcon = document.getElementById("userIcon")
    if (profileImage !== '../image/Screenshot 2025-06-01 211812.png') {
        userIcon.style.display = "none"
    }

    const inputSrc = document.getElementById('profileimg')
    inputSrc.addEventListener('change', () => {
        const imgFile = inputSrc.files[0]
        if (imgFile) {
            const reader = new FileReader()
            reader.onload = function () {
                const imgData = reader.result
                localStorage.setItem('User-Image', imgData)
                document.getElementById('userImg').src = imgData
                document.getElementById('profile2').src = imgData
                userIcon.style.display = "none"
            }
            reader.readAsDataURL(imgFile)
        }
    })
})
