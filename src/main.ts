let turnoActual: number = 0;
const numeroPrincipal = document.getElementById("numero-turno");
const atras = document.getElementById("atras");
const adelante = document.getElementById("adelante");
const reset = document.getElementById("reset");

let numeroManual = document.getElementById("cambio-manual");
const btnAsignar = document.getElementById("btn-asignar");

function actualizarNumeroPrincipal(): void {
  if (
    numeroPrincipal !== null &&
    numeroPrincipal !== undefined &&
    numeroPrincipal instanceof HTMLHeadingElement
  ) {
    numeroPrincipal.textContent = turnoActual.toString().padStart(2, "0");
  }
}

const anterior = () => {
  turnoActual = turnoActual - 1;
  if (turnoActual < 0) {
    turnoActual = 0;
  }
  actualizarNumeroPrincipal();
};

const siguiente = () => {
  turnoActual = turnoActual + 1;
  actualizarNumeroPrincipal();
};

const resetTurno = () => {
  turnoActual = turnoActual = 0;
  actualizarNumeroPrincipal();
};

if (atras !== null && atras !== undefined && atras instanceof HTMLDivElement) {
  atras.addEventListener("click", anterior);
}

if (
  adelante !== null &&
  adelante !== undefined &&
  adelante instanceof HTMLDivElement
) {
  adelante.addEventListener("click", siguiente);
}

if (reset !== null && reset !== undefined && reset instanceof HTMLDivElement) {
  reset.addEventListener("click", resetTurno);
}

function cambiarNumeroManual(): void {
  if (
    numeroManual !== null &&
    numeroManual !== undefined &&
    numeroManual instanceof HTMLInputElement
  ) {
    turnoActual = parseInt(numeroManual.value);
    actualizarNumeroPrincipal();
  }
}

if (
  btnAsignar !== null &&
  btnAsignar !== undefined &&
  btnAsignar instanceof HTMLButtonElement
) {
  btnAsignar.addEventListener("click", cambiarNumeroManual);
}

document.addEventListener("DOMContentLoaded", actualizarNumeroPrincipal);
