import { obtenerOfertas } from "./api.js";

import {
    mostrarOfertas,
    mostrarAhorro,
    mostrarEstado
} from "./render.js";

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
const contenedor = document.querySelector("#lista-ofertas");
const botonReintentar = document.querySelector("#reintentar");

let ofertasCargadas = null;

function actualizar() {

    if (ofertasCargadas !== null) {
        actualizarResultados(ofertasCargadas);
    }
}

busqueda.addEventListener("input", actualizar);
orden.addEventListener("change", actualizar);
botonReintentar.addEventListener("click", cargarOfertas);

async function cargarOfertas() {

    ofertasCargadas = null;
    botonReintentar.hidden = true;
    mostrarEstado(estado, "Cargando ofertas...");

    try {
        const datos = await obtenerOfertas();

        ofertasCargadas = prepararOfertas(datos);

        if (ofertasCargadas.length === 0) {
            mostrarEstado(estado, "No hay ofertas disponibles.");
            mostrarOfertas(contenedor, []);
            actualizarAhorro([]);
        } else {
            actualizar();
        }

    } catch (error) {

        console.error("Error al obtener las ofertas:", error);

        ofertasCargadas = null;
        mostrarOfertas(contenedor, []);
        actualizarAhorro([]);

        let mensaje = "No se han podido cargar las ofertas.";

        if (error.message.startsWith("Error HTTP:")) {
            mensaje = "CheapShark ha respondido con un error del servidor.";
        } else if (error instanceof TypeError) {
            mensaje = "No se ha podido conectar con CheapShark.";
        }

        mostrarEstado(estado, mensaje);

        botonReintentar.hidden = false;
    }
}

function actualizarAhorro(ofertas) {

    const total = calcularAhorroTotal(ofertas);

    mostrarAhorro(ahorroTotal, total);
}

function actualizarResultados(ofertas) {

    const filtradas = filtrarOfertas(ofertas, busqueda.value);

    const ordenadas = ordenarOfertas(filtradas, orden.value);

    mostrarOfertas(contenedor, ordenadas);

    actualizarAhorro(ordenadas);

    if (ordenadas.length === 0) {
        mostrarEstado(estado, "No se han encontrado ofertas.");
    } else {
        mostrarEstado(
            estado,
            `Mostrando ${ordenadas.length} de ${ofertas.length} ofertas.`
        );
    }
}

cargarOfertas();
