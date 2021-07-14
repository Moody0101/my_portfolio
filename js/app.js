const button = document.getElementById("menuTog");
const span = document.getElementsByTagName('span');
const bar = document.getElementById('menu');
const nav = document.querySelector('#navbar ul');
const lets = document.getElementById("let");
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
nav.classList.toggle("hide", false);
button.addEventListener('click', function() {
    if (bar.style.display == "") {
        bar.style.display = "flex";
        button.classList.toggle("active");
        nav.className = "";
    } else if (bar.style.display == "flex") {
        bar.style.display = "";
        button.classList.toggle("active");
        nav.className = "hide";
    }
    // nav.classList.toggle('hide');
});
lets.addEventListener("click", function() {
    details.classList.toggle("active");
});

// scroll animation
function scroll(Nodes, delay = 3000, origin = 'bottom') {
    ScrollReveal().reveal(Nodes, {
        distance: '100%',
        origin: origin,
        opacity: 0,
        DelayNode: delay,
        reset: true
    });
}
const paragrahs = document.querySelectorAll(".innerdiv p");
scroll(paragrahs, 7000, 'top');
const section = document.querySelectorAll(".work img");
scroll(section, 7000);
const work = document.getElementsByClassName("work");
scroll(work, 4000, 'top');
const skills = document.querySelectorAll(".designs img");
scroll(skills, 9000);
const footer = document.getElementsByTagName('footer');
scroll(footer, 7000)


function lighten() {
    /*
    that function will be applied after clicking in an svg button:
    requirements:
        ==> making the svg from scratch <done>
        ==> gettting every node that would be changed 
        ==> change their properties to match a solid vibrant light theme
        ==> requiring to the app.js script
        ==> making svg.css animation hover.
    */
}
const body = document.getElementsByTagName("body")[0];
const mode = document.getElementById("rounded");
const rectan = document.getElementById('rectt');
mode.addEventListener('click', () => {
    if (mode.style.fill == "") {
        mode.style.fill = "white";
        mode.classList.add('mode');
        mode.classList.remove('mode2');
        rectan.classList.toggle("dark");
        body.classList.toggle("ddark");
    } else if (mode.style.fill == "white") {
        mode.style.fill = "";
        mode.classList.remove('mode');
        mode.classList.add('mode2');
        rectan.classList.toggle("dark");
        body.classList.toggle("ddark");
    }


});