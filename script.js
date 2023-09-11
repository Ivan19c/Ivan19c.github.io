const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const INPUT = document.getElementById("peso");
const BOTON = document.getElementById("calcular");

BOTON.addEventListener("click", () => {
    let peso = parseFloat(INPUT.value);

    if (!isNaN(peso) && peso > 0) {
        ERROR.style.display = "none";
        let volumenDiario = holliday(peso);
        let flujoHorario = volumenDiario / 24;
        FLU.textContent = `Volumen Diario: ${volumenDiario.toFixed(2)} cc`;
        MAN.textContent = `Flujo Horario (Mantenimiento): ${flujoHorario.toFixed(2)} cc/hr`;
    } else {
        ERROR.style.display = "block";
    }
});

function holliday(peso){
    let volumen;
    if (peso <= 10){
        volumen = peso * 100;
    } else if (peso > 10 && peso <= 20){
        volumen = 1000 + (peso - 10) * 50;
    } else {
        volumen = 1500 + (peso - 20) * 20;
    }
    return volumen;
}




