var clicks = document.querySelector("#clicks");
const unitario = document.querySelector("#unitario");
//Suma
suma.addEventListener("click", () => {
clicks.innerHTML = parseInt(clicks.innerHTML) + 1;
var valor_total= document.querySelector("#total");
valor_total.innerHTML = parseInt(unitario.innerHTML) * parseInt(clicks.innerHTML);
}
)
//Resta
resta.addEventListener("click", () => {
clicks.innerHTML = parseInt(clicks.innerHTML) - 1;
var valor_total= document.querySelector("#total");
valor_total.innerHTML = parseInt(unitario.innerHTML) * parseInt(clicks.innerHTML);
if (parseInt(clicks.innerHTML) < 0) {
    alert("¡No puedes tener un número negativo de clicks!");
}
}
)
//Reset
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    clicks.innerHTML = "0";
    total.innerHTML = "0";
});