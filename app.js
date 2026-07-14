function calcularDescuento(precio, porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento) / 100;
    const precioFinal = precio - descuento;
    return precioFinal;
}