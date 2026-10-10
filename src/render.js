export function mostrarOfertas(contenedor, ofertas) {

    contenedor.textContent = "";

    for (const oferta of ofertas) {

        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-oferta";

        const imagen = document.createElement("img");
        imagen.className = "tarjeta-imagen";
        imagen.src = oferta.thumb;
        imagen.alt = oferta.title;
        imagen.addEventListener("error", () => {
            imagen.removeAttribute("src");
            imagen.alt = "Imagen no disponible";
        });

        const titulo = document.createElement("h3");
        titulo.className = "tarjeta-titulo";
        titulo.textContent = oferta.title;

        const precio = document.createElement("p");
        precio.className = "precio-actual";
        precio.textContent = `Precio: ${oferta.salePrice.toFixed(2)} $`;

        const precioOriginal = document.createElement("p");
        precioOriginal.className = "precio-original";
        precioOriginal.textContent = `Antes: ${oferta.normalPrice.toFixed(2)} $`;

        const descuento = document.createElement("p");
        descuento.className = "descuento";
        descuento.textContent = `Descuento: ${oferta.savings.toFixed(0)} %`;

        const enlace = document.createElement("a");
        enlace.className = "enlace-oferta";
        enlace.href = `https://www.cheapshark.com/redirect?dealID=${oferta.dealID}`;
        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";
        enlace.textContent = "Ver oferta";

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(precioOriginal);
        tarjeta.appendChild(descuento);
        tarjeta.appendChild(enlace);

        contenedor.append(tarjeta);
    }
}

export function mostrarAhorro(elemento, total) {

    elemento.textContent = `Ahorro potencial: ${total.toFixed(2)} $`;
}

export function mostrarEstado(elemento, mensaje) {

    elemento.textContent = mensaje;
}