function calcularDescuento(precio, porcentajeDescuento) {
    let precioFinal = 0;

    const descuento = (precio * porcentajeDescuento) / 100;
    precioFinal = precio - descuento;
    return precioFinal;
}