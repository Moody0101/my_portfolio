const button = document.getElementById("menuTog");
const span = document.getElementsByTagName('span');
const bar = document.getElementById('menu');
const nav = document.querySelector('#navbar ul');
// const lets = document.getElementById("let");
const details = document.getElementById("det");
const copbtt = document.getElementsByClassName("copy");
const inp = [
    document.getElementById("inpt"),
    document.getElementById("inpt2")
];

window.addEventListener('click', (e) => {
    const round = document.createElement("div");
    round.className = 'divanim';
    round.style.top = `${e.pageY - 20}px`;
    round.style.left = `${e.pageX - 20}px`;
    document.body.appendChild(round);
    setTimeout(() => {
        round.remove();
    }, 700);
});

function copy(container, i) {
    /* Get the text field */
    // var copyText = document.getElementById("myInput");

    /* Select the text field */
    container.select();

    container.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
    copbtt[i].value = "copied";
    copbtt[i].style.background = "white";
    copbtt[i].style.color = "black";

    /* Alert the copied text */
}
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

// scroll animation
function scroll(Nodes, delay, origin = 'bottom') {
    ScrollReveal().reveal(Nodes, {
        distance: '10%',
        origin: origin,
        opacity: 0,
        DelayNode: delay,
        reset: true
    });
}
const paragrahs = document.querySelectorAll(".innerdiv p");
scroll(paragrahs, 10000, 'top');
const skills = document.querySelectorAll(".designs img");
const git = document.getElementById("lastIm");
scroll(git, 12000, 'left');
scroll(skills, 12000, 'right');

// 3d effect

VanillaTilt.init(document.querySelectorAll(".cont"), {
    max: 16,
    speed: 10,
});