import { boton,mensaje } from './domLoader';
import '../css/main.css';
import '../css/botones.css';
var mostrarMensaje = false;

boton.addEventListener('click', toggleMostrarMensaje);
actualizarMensaje();

function toggleMostrarMensaje() {
    mostrarMensaje = !mostrarMensaje;
    actualizarMensaje();
    actualizarBoton()
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