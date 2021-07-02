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
button.addEventListener('click', function() {
    if (bar.style.display == "") {
        bar.style.display = "flex";
        button.classList.toggle("active")
    } else if (bar.style.display == "flex") {
        bar.style.display = "";
        button.classList.toggle("active")
    }
});
// var visible = false
lets.addEventListener("click", function() {
    // if (details.style.display == "") {
    details.classList.toggle("active");
    //     visible = true;
    // } else if (details.style.display == "flex") {
    //     details.style.display = "flex";
    //     visible = false;
    // }
    // switch (visible) {
    //     case true:
    //         details.style.animation = "active .7s ease";

    //         break;
    //     case false:
    //         details.style.animation = "deactive .7s ease";
    //         break;
    // }
});