function calcularDescuento(precio, porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento) / 100;
    const newPorcent = 10
    return (precio - descuento) * newPorcent;
}