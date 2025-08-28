function reverseArray(array) {
  let arrayInvertido = [];
  array.forEach((element) => {
    arrayInvertido.unshift(element);
  });

  console.log(array);
  console.log(arrayInvertido);
}
reverseArray([1, 2, 3, 4, 5]);
//Evita errores sutiles donde una parte del código depende de un array que fue modificado por otra función sin que te dieras cuenta.  Una función pura siempre dará el mismo resultado para las mismas entradas y no tiene efectos secundarios. Esto hace que tu código sea mucho más fácil de razonar, probar y depurar. Sabés que el array original no cambiará de forma inesperada.

//----------------------------------- //

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];

    array[i] = array[array.length - 1 - i];

    array[array.length - 1 - i] = temp;
  }
  console.log(array);
}
reverseArrayInPlace([0, 1, 2, 3]);
//reverseArrayInPlace modifica el array existente, sin la necesidad de crear un nuevo array en la memoria. No se realiza una nueva asignación de memoria, lo que es una operación costosa. En general, modificar un objeto o estructura de datos existente (in-place) es más rápido que crear una nueva y copiar datos. En este caso, el intercambio de elementos es una operación muy eficiente.
