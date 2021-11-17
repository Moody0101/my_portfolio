
const button = document.getElementById("menuTog");
const bar = document.getElementById('menu');
const nav = document.querySelector('#navbar ul');
const skills = document.querySelectorAll(".designs img");
const paragraphs = document.querySelectorAll(".innerdiv p");
const git = document.getElementById("lastIm");
var containernodes = [...document.getElementsByTagName("section")];
const loadingdiv = document.getElementsByClassName("container");
const loading = document.getElementById("loading");
const about = document.querySelectorAll("#about .text p span");
const aboutimg = document.querySelectorAll("#about .text img");
const workflow = document.getElementById("workflowIMG");
const footparags = document.querySelectorAll("footer div");
const anchors = document.getElementsByClassName("anchors");

const isInviewPort = (e) => {
    const rect = e.getBoundingClientRect();
    return (
        rect.top >= -130 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
        );
}

for(let i=0; i < containernodes.length; i++) {
    containernodes[i].style.display = "none";
}
const containers = [
...containernodes, 
...footparags
];

const temp = [containers[0], containers[1], ...footparags]

for(let i=0; i < temp.length;i++) {    
    temp[i].setAttribute('data-sal', "slide-down");
    temp[i].setAttribute('data-sal-repeat', null);
    temp[i].setAttribute('data-sal-delay', "500");
    temp[i].setAttribute('data-sal-easing', "ease");      
}



sal({
    once: false,
    threshold: 0.6
});

// code for the nav anchors to disable the nav bar when clicked.

for(let i=0; i < anchors.length;i++) {
anchors[i].addEventListener("click", ()=> {
    document.querySelector("#navbar ul ul").classList.toggle("hide");
    bar.classList.toggle("hide");
    button.classList.toggle("active");
    bar.style.display = "";
})}


button.addEventListener('click', () => {
    document.querySelector("#navbar ul ul").classList.toggle("hide");
    bar.classList.toggle("hide");
    button.classList.toggle("active");
    if (bar.style.display == "") {
        bar.style.display = "flex";
        } else if (!(bar.style.display == "")) {
        bar.style.display = "";
    }

});

// 3d effect in the hero section using vanilla tilt library

VanillaTilt.init(document.querySelectorAll(".cont"), {
    max: 16,
    speed: 10
});

// loading animation
// this code makes the animation enabled after 4 secs
setTimeout(() => {
    loadingdiv[0].style.display = "none";
    loading.style.display = "none";
    for(let i=0; i < containernodes.length; i++) {
    containernodes[i].style.display = "";
    containernodes[i].style.transition = "1s all ease";
}
}, 4000);