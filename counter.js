let numChange = document.getElementById("numChange");
number = 0;

let up = document.querySelector(".btnUp");
let down = document.querySelector(".btnDown");

up.addEventListener ("click", numUp = () => {
    number++;
    numChange.innerHTML = number;
});

down.addEventListener ("click", numDown = () => {
    number--;
    numChange.innerHTML = number;
});