import "@babel/polyfill"; // no es necesario importarlo si usamos la opcion useBuiltIns: 'usage',
import { boton, mensaje } from "./domLoader";
import { log } from "./logger";
import { unaPromise } from "./promises";
import "../css/main.css";
import "../css/botones.css";
let mostrarMensaje = false;

boton.addEventListener("click", toggleMostrarMensaje);
actualizarMensaje();

function toggleMostrarMensaje() {
  mostrarMensaje = !mostrarMensaje;
  actualizarMensaje();
  actualizarBoton();
  log("Boton Clickeado");

  unaPromise().then(mensaje => {
    alert(mensaje);
  });

}

function actualizarBoton() {
  if (mostrarMensaje) {
    boton.textContent = "Ocultar Mensaje";
  } else {
    boton.textContent = "Mostrar Mensaje";
  }
}

function actualizarMensaje() {
  if (mostrarMensaje) {
    mensaje.style.display = "block";
  } else {
    mensaje.style.display = "none";
  }
}
