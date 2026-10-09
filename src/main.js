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

async function cargarOfertas() {

    estado.textContent = "Cargando ofertas...";

    try {
        const datos = await obtenerOfertas();
        const ofertas = prepararOfertas(datos);

        if (ofertas.length === 0) {
            estado.textContent = "No hay ofertas disponibles.";
        } else {

            const actualizar = () => actualizarResultados(ofertas);

            busqueda.addEventListener("input", actualizar);
            orden.addEventListener("change", actualizar);

            actualizar();
        }

    } catch (error) {
        console.error("Error al obtener las ofertas:", error);
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