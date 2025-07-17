document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('.left-section input[type="button"]');

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();

        const email = document.querySelector('.left-section input[placeholder="Enter your email"]').value.trim();
        const password = document.querySelector('.left-section input[placeholder="Enter your password"]').value.trim();

        if (!email || !password) {
            alert("Please fill in both email and password.");
            return;
        }

        const allUser = JSON.parse(localStorage.getItem('userData')) || [];

        let foundUser = false;
        for (let user of allUser) {
            if (user.email === email && user.password === password) {
                foundUser = true;
                localStorage.setItem('currentUser', JSON.stringify(user));

                break;
            }
        }

        if (foundUser) {
            alert("Login successful!");
            window.location.href = "../Profile/index.html";
        } else {
            alert("Incorrect email or password.");
        }


    });
});
