const button = document.getElementById("menuTog");
const span = document.getElementsByTagName('span');
const bar = document.getElementById('menu');
const nav = document.querySelector('#navbar ul')


button.addEventListener('click', function() {
    if (bar.style.display == "") {
        bar.style.display = "flex";
        button.className = "sticky";
    } else if (bar.style.display == "flex") {
        bar.style.display = "";
        button.className = "";
    }
});