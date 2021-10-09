const button = document.getElementById("menuTog");
const span = document.getElementsByTagName('span');
const bar = document.getElementById('menu');
const nav = document.querySelector('#navbar ul');
const skills = document.querySelectorAll(".designs img");
const paragrahs = document.querySelectorAll(".innerdiv p");
const git = document.getElementById("lastIm");
var containernodes = [document.getElementById("section1"), document.getElementById("Skillsec")]
const loadingdiv = document.getElementsByClassName("container");
const loading = document.getElementById("loading");



for(let i=0; i < containernodes.length; i++) {
    containernodes[i].style.display = "none"
}

// the nav button
button.addEventListener('click', function() {

    if (bar.style.display == "") {
        bar.style.display = "flex";
        button.classList.toggle("active");
        bar.classList.toggle("hide")
    } else if (!(bar.style.display == "")) {
        bar.style.display = "";
        button.classList.toggle("active");
        bar.classList.toggle("hide");
    }
});

// scroll animation code 

function scroll(Nodes, delay, origin = 'bottom') {
    ScrollReveal().reveal(Nodes, {
        distance: '10%',
        origin: origin,
        opacity: 0,
        DelayNode: delay,
        reset: true
    });
}

scroll(paragrahs, 10000, 'top');
scroll(git, 12000, 'left');
scroll(skills, 12000, 'right');

// 3d effect in the hero section using vanilla tilt library

VanillaTilt.init(document.querySelectorAll(".cont"), {
    max: 16,
    speed: 10,
});

// loading animation


setTimeout(() => {
    loadingdiv[0].style.display = "none";
    loading.style.display = "none";
    for(let i=0; i < containernodes.length; i++) {
    containernodes[i].style.display = "";
    containernodes[i].style.transition = "1s all ease";
    }
}, 4050);