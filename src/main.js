
import { obtenerOfertas } from "./api.js";
import { mostrarOfertas } from "./render.js";

import {
    filtrarOfertas,
    prepararOfertas,
    calcularAhorroTotal,
    ordenarOfertas
} from "./logic.js";

const estado = document.querySelector("#estado");
const busqueda = document.querySelector("#busqueda");
const ahorroTotal = document.querySelector("#ahorro-total");
const orden = document.querySelector("#orden");

let ofertasCargadas = null;

function actualizar() {

    if (ofertasCargadas !== null) {
        actualizarResultados(ofertasCargadas);
    }
}

busqueda.addEventListener("input", actualizar);
orden.addEventListener("change", actualizar);

async function cargarOfertas() {

    ofertasCargadas = null;
    estado.textContent = "Cargando ofertas...";

    try {
        const datos = await obtenerOfertas();

        ofertasCargadas = prepararOfertas(datos);

        if (ofertasCargadas.length === 0) {
            estado.textContent = "No hay ofertas disponibles.";
            mostrarOfertas([]);
            actualizarAhorro([]);
        } else {
            actualizar();
        }

    } catch (error) {
        console.error("Error al obtener las ofertas:", error);

        ofertasCargadas = null;
        mostrarOfertas([]);
        actualizarAhorro([]);

        estado.textContent = "No se han podido cargar las ofertas.";
    }
}

function actualizarAhorro(ofertas) {

    const total = calcularAhorroTotal(ofertas);

    ahorroTotal.textContent = `Ahorro potencial: ${total.toFixed(2)} $`;
}

function actualizarResultados(ofertas) {

    const filtradas = filtrarOfertas(ofertas, busqueda.value);

    const ordenadas = ordenarOfertas(filtradas, orden.value);

    mostrarOfertas(ordenadas);

    actualizarAhorro(ordenadas);

    if (ordenadas.length === 0) {
        estado.textContent = "No se han encontrado ofertas.";
    } else {
        estado.textContent = `Mostrando ${ordenadas.length} de ${ofertas.length} ofertas.`;
    }
}

cargarOfertas();
