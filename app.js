function calcularDescuento(precio, porcentajeDescuento) {
    let precioFinal = 0;

    const descuento = (precio * porcentajeDescuento) / 100;
    const newPorcent = 10
    return (precio - descuento) * newPorcent;
}