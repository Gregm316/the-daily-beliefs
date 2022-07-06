console.log("login.js");

const loginFormHandler = async (event) => {
    console.log("loginHandler function called");
    event.preventDefault();

    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();



    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
            //send successful login message?
        } else {
            alert('Failed to log in.');
        }
    }
};

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("click", loginFormHandler);

//   document
//   .querySelector('#submit-button')
//   .addEventListener('submit', loginFormHandler);