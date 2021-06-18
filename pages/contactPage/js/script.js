const Mode = document.getElementById('Mode');
const body = document.getElementsByTagName('body');
const card = document.getElementById('card');
const paragraphs = document.getElementsByTagName('p');
const h2 = document.getElementsByTagName('h2');
const sm = document.getElementById('SM');
const anchors = document.getElementsByTagName('a');
var dark = true
const socialMedia = document.getElementById('social');
const lightMode = {
    "background": "rgb(240, 232, 232)",
    "card": "rgb(250, 250, 250)",
    "fontColor": "#000",
    "par": "white"

}
Mode.addEventListener('click', () => {
    if (dark) {
        dark = false;
        body[0].style.background = lightMode["background"];
        h2[0].style.color = lightMode["fontColor"];
        card.style.background = lightMode["card"];
        Mode.textContent = "Dark mode";
        Mode.style.background = "black";
        Mode.style.color = "white";
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = "black";
            paragraphs[i].style.background = lightMode["par"];
        }
        socialMedia.style.background = "rgb(230, 255, 255)";
        socialMedia.style.color = "black";
        sm.style.background = "rgb(230, 255, 255)";
        for (let i = 0; i < anchors.length; i++) {
            anchors[i].style.color = "rgb(59, 52, 52)";
        }
    } else {
        body[0].style.background = "";
        card.style.background = "";
        h2[0].style.color = "";
        dark = true;
        Mode.textContent = "Light mode";
        Mode.style.background = "";
        Mode.style.color = "";
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.background = "";
            paragraphs[i].style.color = "";
        }
        socialMedia.style.background = "";
        socialMedia.style.color = "";
        sm.style.background = "";
        for (let i = 0; i < anchors.length; i++) {
            anchors[i].style.color = "";
        }

    }
});
var clicked = false;
socialMedia.addEventListener('click', () => {
    if (!clicked) {
        sm.style.display = "flex";
        socialMedia.classList.add("clicked");
        clicked = true;
    } else {
        clicked = false;
        sm.style.display = "";
        socialMedia.classList.remove("clicked");
    }
})