function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    a === null ||
    typeof a !== "object" ||
    b === null ||
    typeof b !== "object"
  ) {
    return false;
  }

  // Si llegamos acá, ambos valores son objetos válidos. Ahora obtenemos un array con las claves de cada objeto.
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  // Verificamos si tienen el mismo número de propiedades
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Iteramos sobre las claves del primer objeto
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  // Si el bucle terminó sin encontrar diferencias, los objetos son profundamente iguales.
  return true;
}
