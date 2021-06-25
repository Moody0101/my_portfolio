const button = document.getElementById("menuTog");
const span = document.getElementsByTagName('span');
const bar = document.getElementById('menu');
const nav = document.querySelector('#navbar ul');
const lets = document.getElementById("let");
const details = document.getElementById("det");


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