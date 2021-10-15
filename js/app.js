const button = document.getElementById("menuTog");
const bar = document.getElementById('menu');
const nav = document.querySelector('#navbar ul');
const skills = document.querySelectorAll(".designs img");
const paragrahs = document.querySelectorAll(".innerdiv p");
const git = document.getElementById("lastIm");
const containernodes = document.getElementsByTagName("section");
const loadingdiv = document.getElementsByClassName("container");
const loading = document.getElementById("loading");
const about = document.querySelectorAll("#about .text p span");
const aboutimg = document.querySelectorAll("#about .text img");

for(let i=0; i < containernodes.length; i++) {
    containernodes[i].style.display = "none";
}

// the nav button
button.addEventListener('click', function() {
    bar.classList.toggle("hide");
    button.classList.toggle("active");
    if (bar.style.display == "") {
        bar.style.display = "flex";
    } else if (!(bar.style.display == "")) {
        bar.style.display = "";
    }
});

// scroll animation code 

function scroll(Nodes, delay, origin = 'bottom', MOBILE = false) {
    ScrollReveal().reveal(Nodes, {
        distance: '10%',
        origin: origin,
        opacity: 0,
        DelayNode: delay,
        reset: true,
    });
}


scroll(about, 12000);
scroll(aboutimg, 12000);

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
}, 4000);