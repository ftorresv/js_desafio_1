var clicks = document.querySelector("#clicks");
const unitario = document.querySelector("#unitario");
const total = document.querySelector("#total");

// Suma
suma.addEventListener("click", () => {
    clicks.innerHTML = parseInt(clicks.innerHTML) + 1;
    var valor_total = parseInt(unitario.innerHTML) * parseInt(clicks.innerHTML);
    total.innerHTML = valor_total.toLocaleString('es-CL');
});

// Resta
resta.addEventListener("click", () => {
    clicks.innerHTML = parseInt(clicks.innerHTML) - 1;
    var valor_total = parseInt(unitario.innerHTML) * parseInt(clicks.innerHTML);
    total.innerHTML = valor_total.toLocaleString('es-CL');
    if (parseInt(clicks.innerHTML) < 0) {
        alert("¡No puedes tener un número negativo de clicks!");
    }
});

// Reset
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    clicks.innerHTML = "0";
    total.innerHTML = "0";
});

// var clicks = document.querySelector("#clicks");
// const unitario = document.querySelector("#unitario");
// //Suma
// suma.addEventListener("click", () => {
// clicks.innerHTML = parseInt(clicks.innerHTML) + 1;
// var valor_total= document.querySelector("#total");
// valor_total.innerHTML = parseInt(unitario.innerHTML) * parseInt(clicks.innerHTML);
// }
// )
// //Resta
// resta.addEventListener("click", () => {
// clicks.innerHTML = parseInt(clicks.innerHTML) - 1;
// var valor_total= document.querySelector("#total");
// valor_total.innerHTML = parseInt(unitario.innerHTML) * parseInt(clicks.innerHTML);
// if (parseInt(clicks.innerHTML) < 0) {
//     alert("¡No puedes tener un número negativo de clicks!");
// }
// }
// )
// //Reset
// const resetButton = document.querySelector("#reset");
// resetButton.addEventListener("click", () => {
//     clicks.innerHTML = "0";
//     total.innerHTML = "0";
// });
// Segundo metodo
// const clicks = document.querySelector("#clicks");
// const unitario = document.querySelector("#unitario");
// const total = document.querySelector("#total");
// const btnSuma = document.querySelector("#suma");
// const btnResta = document.querySelector("#resta");
// const btnReset = document.querySelector("#reset");

// // Valor base sin formato
// const valorUnitario = 40000;
// let contador = 0;

// // Función que actualiza los valores visuales
// function actualizarValores() {
//     clicks.textContent = contador;
//     unitario.textContent = `$${valorUnitario.toLocaleString('es-CL')}`;
//     total.textContent = `$${(valorUnitario * contador).toLocaleString('es-CL')}`;
// }

// // Suma
// btnSuma.addEventListener("click", () => {
//     contador++;
//     actualizarValores();
// });

// // Resta
// btnResta.addEventListener("click", () => {
//     if (contador > 0) {
//         contador--;
//         actualizarValores();
//     } else {
//         alert("¡No puedes tener un número negativo de clicks!");
//     }
// });

// // Reset
// btnReset.addEventListener("click", () => {
//     contador = 0;
//     actualizarValores();
// });

// // Mostrar valores iniciales al cargar
// actualizarValores();
