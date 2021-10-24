
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

for(let i=0; i < containernodes.length; i++) {
    containernodes[i].style.display = "none";
}
const containers = [
...about,
...containernodes, 
...aboutimg
];
for(let i=0; i < containers.length;i++) {
    containers[i].setAttribute('data-sal', "slide-down");
    containers[i].setAttribute('data-sal-delay', "500");
    containers[i].setAttribute('data-sal-repeat', null);
    containers[i].setAttribute('data-sal-easing', "ease");      
}
var animation = sal({
    once: false,
    threshold: 0.3
})
button.addEventListener('click', function() {

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


setTimeout(() => {
    loadingdiv[0].style.display = "none";
    loading.style.display = "none";
    for(let i=0; i < containernodes.length; i++) {
    containernodes[i].style.display = "";
    containernodes[i].style.transition = "1s all ease";
}
}, 4000);