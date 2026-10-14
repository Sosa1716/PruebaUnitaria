export function calcularTotal(precio, cantidad) {
  if (!Number.isFinite(precio) || precio < 0) {
    throw new Error('El precio debe ser un número mayor o igual a cero');
  }

  if (!Number.isInteger(cantidad) || cantidad < 0) {
    throw new Error('La cantidad debe ser un entero mayor o igual a cero');
  }

  return precio * cantidad;
}
