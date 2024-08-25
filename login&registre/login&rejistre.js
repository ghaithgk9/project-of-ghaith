
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-bar").onclick = () => {
    navbar.classList.toggle("active");
}

document.querySelector("#close").onclick = () => {
    navbar.classList.remove("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
    if (window.scrollY > 100) {
        document.querySelector("header").classList.add("active");
    } else {
        document.querySelector("header").classList.remove("active");
    }
}

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
    themeToggler.classList.toggle("fa-sun");
    if (themeToggler.classList.contains("fa-sun")) {
        document.querySelector("body").classList.add("active");
    } else {
        document.querySelector("body").classList.remove("active");
    }
}

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.querySelector('.form-container.sign-up form');

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = signUpForm.querySelector('input[type="text"]').value;
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password = signUpForm.querySelector('input[type="password"]').value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

      
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        
        const user = {
            id: Date.now(),
            name: name,
            email: email,
            password: password,
            role: 'user'
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        signUpForm.reset();

        container.classList.remove("active");
    });
});
