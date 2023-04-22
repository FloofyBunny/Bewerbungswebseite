"use strict"

// reset Animation when user refocuses
window.addEventListener("focus", () => {
    for (let i = 1; i <= 7; i++){
        let item = document.querySelector("#techstack img:nth-child(" + i + ")" );
        item.style.transform = "rotate(0deg)";
        item.style.transform = "scale(1)";
    }
});

//cycle techstack elements animations
let id = 1;
function currentAnimation() {

    let item = document.querySelector("#techstack img:nth-child(" + id + ")" );
    item.style.animationPlayState = "paused";

    id = Math.floor(Math.random() * 7) + 1;
    item = document.querySelector("#techstack img:nth-child(" + id + ")" );
    item.style.animationPlayState = "running";
}

setInterval(currentAnimation, 3000);