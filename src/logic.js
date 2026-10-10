export function filtrarOfertas(ofertas, busqueda) {

    const texto = busqueda.trim().toLowerCase();

    return ofertas.filter(oferta =>
        oferta.title.toLowerCase().includes(texto)
    );
}

export function prepararOfertas(ofertas) {

    if (!Array.isArray(ofertas)) {
        throw new Error("La API no ha devuelto un array de ofertas.");
    }

    return ofertas
        .filter(oferta =>
            oferta !== null &&
            typeof oferta === "object" &&
            typeof oferta.title === "string" &&
            oferta.title.trim() !== ""
        )
        .map(oferta => ({
            ...oferta,
            salePrice: Number(oferta.salePrice),
            normalPrice: Number(oferta.normalPrice),
            savings: Number(oferta.savings)
        }))
        .filter(oferta =>
            Number.isFinite(oferta.salePrice) &&
            Number.isFinite(oferta.normalPrice) &&
            Number.isFinite(oferta.savings) &&
            oferta.salePrice >= 0 &&
            oferta.normalPrice >= oferta.salePrice
        );
}

export function calcularAhorroTotal(ofertas) {

    return ofertas.reduce((total, oferta) => {
        return total + (oferta.normalPrice - oferta.salePrice);
    }, 0);
}

export function ordenarOfertas(ofertas, criterio) {

    switch (criterio) {

        case "precio-asc":
            return ofertas.toSorted((a, b) => a.salePrice - b.salePrice);

        case "precio-desc":
            return ofertas.toSorted((a, b) => b.salePrice - a.salePrice);

        case "descuento-desc":
            return ofertas.toSorted((a, b) => b.savings - a.savings);

        default:
            return ofertas;
    }
}