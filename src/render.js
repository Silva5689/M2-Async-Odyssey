export function mostrarOfertas(ofertas) {

    const contenedor = document.querySelector("#lista-ofertas");

    contenedor.textContent = "";

    for (const oferta of ofertas) {

        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-oferta";

        const imagen = document.createElement("img");
        imagen.className = "tarjeta-imagen";
        imagen.src = oferta.thumb;
        imagen.alt = oferta.title;

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

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(precioOriginal);
        tarjeta.appendChild(descuento);

        contenedor.append(tarjeta);
    }
}