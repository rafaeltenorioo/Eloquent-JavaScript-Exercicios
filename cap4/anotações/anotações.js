let unObjeto = { esquerda: 1, direita: 2 };
console.log(unObjeto.esquerda);

delete unObjeto.esquerda;
console.log(unObjeto.esquerda);

console.log("esquerda" in unObjeto);

console.log("direita" in unObjeto);

//-----------------------//

//'in' aplicado em objetos, verifica se a propriedade existe naquele objeto
console.log(Object.keys({ a: 1, b: 2, c: 3 })); //retorna um array com as chaves do objeto

//-----------------------//

// Esta é uma forma abreviada de escrever o objeto {evento: evento, importancia: importancia
let journal = [];
function addEntry(evento, importancia) {
  journal.push({ evento, importancia });
}

//-----------------------//

/* push adiciona no final 
    pop obtém e remove do final
    shift obtém e remove do começo
    unshift adiciona no começo
*/
let listaDeTarefas = [];
function recordar(tarefa) {
  listaDeTarefas.push(tarefa);
}

function obterTarefa() {
  listaDeTarefas.shift();
}

function recordarUrgente(tarefa) {
  listaDeTarefas.unshift(tarefa);
}

//-----------------------//

// slice(x,y) retorna um array que começa no índice x e vai até o índice y-1
console.log([1, 2, 3, 4, 5].slice(2, 4)); // [3,4]
console.log("cachorro".slice(5, 7)); // rr

//-----------------------//

//.concat combina dois arrays
function remove(array, indice) {
  return array.slice(0, indice).concat(array.slice(indice + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2)); // ['a', 'b', 'd', 'e']

//-----------------------//

//.split e .join
let sentença = "Eu sou uma frase";
let palavras = sentença.split(" ");
console.log(palavras); // ['Eu', 'sou', 'uma', 'frase']

console.log(palavras.join("-")); // Eu-sou-uma-frase

//-----------------------//

// (...)
// No importa si la función se llama con 4, 10 o 50 argumentos; ...numbers recolectará todos esos valores y los meterá en un array llamado numbers
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2)); // → 9

// Con la sintaxis de propagación, el array se "expande" a sus elementos:
let numbers = [5, 1, 7];
console.log(max(...numbers)); // Esto es lo mismo que max(5, 1, 7)
// → 7

// Fíjate que ...words se "desarma" y sus elementos ("never" y "fully") se colocan en el nuevo array. Esto es ideal para combinar listas de elementos dinámicamente.
let words = ["never", "fully"];
let newArray = ["will", ...words, "understand"];

console.log(newArray); // → ["will", "never", "fully", "understand"]

//-----------------------//

/* Math.random() devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusivo).

 console.log(Math.floor(Math.random() * 10));
 // → 2
 Al multiplicar el número aleatorio por 10, obtenemos un número mayor o igual a 0 ymenor que 10. Dado que Math.floor redondea hacia abajo, esta expresión producirá, con igual probabilidad, cualquier número del 0 al 9. También existen las funciones Math.ceil (para “techo”, que redondea hacia arriba al número entero más cercano), Math.round (al número entero más cercano) y Math abs, que toma el valor absoluto de un número, es decir, niega los valores negativos pero deja los positivos tal como están. */

//-----------------------//

/* Cuando no estás seguro de si un valor dado produce un objeto pero aún deseas
 leer una propiedad de él cuando lo hace, puedes usar una variante de la notación
 de punto: objeto?.propiedad. */
function city(objeto) {
  return objeto.address?.city;
}
console.log(city({ address: { city: "Toronto" } }));
// → Toronto
console.log(city({ name: "Vera" }));
// → undefined
