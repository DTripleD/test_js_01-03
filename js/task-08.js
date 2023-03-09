const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const {email, password}= event.currentTarget;


    if(email.value.trim() === "" || password.value.trim() === ""){
        alert("Всі поля повинні бути заповнені!");
    }

    const userData = {
        email: email.value,
        password: password.value
    }

    console.log(userData);

    event.currentTarget.reset();
});


