"use strict"


function showDropDown(id) {
    produkte.classList.toggle('show')
}

produkte = document.getElementById('produkte')
produkte.addEventListener('mouseover', showDropDown(produkte));
