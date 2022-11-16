const colors = ["maroon", "purple", "blue", "red", "green", "yellow", "aqua", "orange", "aguamarine", "lime", "olive", "cornflowerblue", "crimson", "darkgreen", "darkturquoise", "deeppink", "gold", "indianred", "fuchsia", "indigo", "lawngreen", "mediumblue", "teal", "chocolate", "darkgray", "orangered"];

const btn = document.getElementById("generate");
const reset = document.getElementById("reset");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

if (e.target === reset) {
    color.innerHTML = "#303134";
    document.body.style.background = "#303134";
}

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}
