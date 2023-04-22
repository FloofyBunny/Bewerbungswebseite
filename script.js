"use strict"

//cycle techstack elements animations
let id = 1;
function currentAnimation() {

    let item = document.querySelector("#techstack img:nth-child(" + id + ")" );
    item.classList.remove("animation");

    id = Math.floor(Math.random() * 7) + 1;
    item = document.querySelector("#techstack img:nth-child(" + id + ")" );
    item.classList.add("animation");
}

setInterval(currentAnimation, 3000);