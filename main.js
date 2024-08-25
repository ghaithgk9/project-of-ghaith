
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-bar").onclick =()=>{
    navbar.classList.toggle("active");
}
document.querySelector("#close").onclick =()=>{
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

let countDate = Date.now() + 3 * 24 * 60 * 60 * 1000;

function countDown() {
    let gap = countDate - Date.now(); 

    let days = Math.floor(gap / (1000 * 60 * 60 * 24));
    let hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((gap / (1000 * 60)) % 60);
    let seconds = Math.floor((gap / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    
    if (gap < 0) {
        clearInterval(timer);
        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconds").textContent = 0;
    }
}

let timer = setInterval(countDown, 1000);




