document.addEventListener("DOMContentLoaded", function () {
    let allUser = JSON.parse(localStorage.getItem('userData')) || [];

    const submitButton = document.querySelector('.left-section input[type="submit"]');

    submitButton.addEventListener("click", function () {
        // Input values
        const name = document.querySelector('.left-section input[placeholder="Name"]').value.trim();
        const lastname = document.querySelector('.left-section input[placeholder="Lastname"]').value.trim();
        const email = document.querySelector('.left-section input[placeholder="Enter your email"]').value.trim();
        const password = document.querySelector('.left-section input[placeholder="Enter your password"]').value.trim();
        const repeatPassword = document.querySelector('.left-section input[placeholder="Repeat your password"]').value.trim();

        if (!name || !lastname || !email || !password || !repeatPassword) {
            alert("enter!");
            return;
        }

        if (password !== repeatPassword) {
            alert("Password is not correct!");
            return;
        }

        // Email uniqueness check using for...of
        let emailExists = false;
        for (let user of allUser) {
            if (user.email === email) {
                emailExists = true;
                break;
            }
        }

        if (emailExists) {
            alert("Enter Email correct!");
            return;
        }

        const userData = { name, lastname, email, password }
        allUser.push(userData)
        localStorage.setItem("userData", JSON.stringify(allUser))

        alert("Registration sucsessful!")
    });
});
