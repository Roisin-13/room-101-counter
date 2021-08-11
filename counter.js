let numChange = document.getElementById("numChange");
number = 0;

let up = document.querySelector(".btnUp");
let down = document.querySelector(".btnDown");

/*
numUp = () => {
    for (let i = 0; i < 100; i++);
    return i;
}

numDown = () => {
    for (let i = 0; i > -100; i--);
    return i;
}
*/
up.addEventListener ("click", numUp = () => {
    number++;
    numChange.innerHTML = number;
});

down.addEventListener ("click", numDown = () => {
    number--;
    numChange.innerHTML = number;
});