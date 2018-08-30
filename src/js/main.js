import { boton,mensaje } from './domLoader';
import { log } from './logger';
import '../css/main.css';
import '../css/botones.css';
let mostrarMensaje = false;

boton.addEventListener('click', toggleMostrarMensaje);
actualizarMensaje();

function toggleMostrarMensaje() {
    mostrarMensaje = !mostrarMensaje;
    actualizarMensaje();
    actualizarBoton()
    log("Boton Clickeado");
}

function actualizarBoton() {
    if (mostrarMensaje) {
        boton.textContent = 'Ocultar Mensaje';
    } else {
        boton.textContent = 'Mostrar Mensaje';
    }
}

function actualizarMensaje() {
    if (mostrarMensaje) {
        mensaje.style.display = 'block';
    } else {
        mensaje.style.display = 'none';
    }
}