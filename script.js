let turn = document.querySelector(".turn");
let circle = document.querySelector(".circle");
let Annually = document.querySelectorAll(".Annually");
let Monthly = document.querySelectorAll(".Monthly");


turn.addEventListener("click", e => {
    circle.classList.toggle("circle-activate");

    Annually.forEach(e => {
        e.classList.toggle("desactive");
    });

    Monthly.forEach(e => {
        e.classList.toggle("active");
    });
});