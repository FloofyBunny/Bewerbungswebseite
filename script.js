"use strict"

if(window.innerWidth < 1300){
    resize();
}

window.addEventListener("resize", resize);

function resize(){
    if(window.innerWidth < 1300){
        let cols = document.querySelectorAll(".resize");
        cols.forEach((e) => {
            e.classList.remove("col-sm");
        });
    }
    if(window.innerWidth >= 1300){
        let cols = document.querySelectorAll(".resize");
        cols.forEach((e) => {
            e.classList.add("col-sm");
        });
    }

}

const itemCount = 2

function carouselCaption() {

    if(window.innerWidth < 1200){
        let prev = document.querySelector("#carousel .show");

        for(let i = 1; i<= itemCount; i++){
            let x = document.getElementById("car-" + i);
            if(x.classList.contains("active")) {
                let y = document.querySelector(".small-caption:nth-child("+ i + ")");

                if(y !== prev && prev !== null){
                    prev.classList.remove("show");
                    prev.classList.add("d-none");
                }
                y.classList.remove("d-none");
                y.classList.add("show");
            }
        }
    } else {
        let x = document.querySelectorAll(".small-caption");
        x.forEach((e) => {e.classList.add("d-none");});
        x.forEach((e) => {e.classList.remove("show");});
        
    }
}
setInterval(carouselCaption, 100);








//cycle techstack elements animations
let id = 1;
function currentAnimation() {
    
    let item = document.querySelector("#techstack div:nth-child(" + id + ") img" );
    item.classList.remove("animation");

    id = Math.floor(Math.random() * 7) + 1;
    item = document.querySelector("#techstack div:nth-child(" + id + ") img" );
    item.classList.add("animation");

}


setInterval(currentAnimation, 3000);