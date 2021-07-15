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