let jsonString =
  '{"nombre": "Ana", "esDesarrolladora": true, "lenguajes": ["JavaScript", "HTML", "CSS"]}';

// Usamos JSON.parse() para convertir la cadena en un objeto de JS
let persona = JSON.parse(jsonString);

console.log(persona);
// → { nombre: 'Ana', esDesarrolladora: true, lenguajes: [ 'JavaScript', 'HTML', 'CSS' ] }

// Ahora podemos acceder a sus propiedades como si fuera un objeto normal
console.log(persona.nombre);
// → 'Ana'
console.log(persona.lenguajes[0]);
// → 'JavaScript'

//Es el paso que siempre harás después de recibir una respuesta de una API. La respuesta viene como texto, y JSON.parse() te permite convertirla en un objeto manipulable.

//-----------------------//

let coche = {
  marca: "Ford",
  modelo: "Mustang",
  color: "rojo",
  anio: 2022,
};

// Usamos JSON.stringify() para convertir el objeto en una cadena JSON
let jsonCoche = JSON.stringify(coche);

console.log(jsonCoche); // → '{"marca":"Ford","modelo":"Mustang","color":"rojo","anio":2022}'
// Fíjate que el resultado es una única cadena de texto
// Lo usarás cuando necesites enviar datos desde el cliente (tu navegador) al servidor, por ejemplo, al enviar un formulario de registro o al guardar las preferencias de un usuario en el localStorage del navegador.

/* Aplicaciones en el Front-End

Comunicación con APIs: Es el uso más común. Usando la API fetch, le haces una petición a un servidor, recibís una respuesta en formato JSON, y usas JSON.parse() para trabajar con los datos.
Almacenamiento Local (localStorage): El navegador solo puede guardar cadenas de texto en localStorage. Si quieres guardar un objeto, primero tienes que convertirlo a JSON con JSON.stringify(). Para recuperarlo, lo parses de nuevo con JSON.parse().
Archivos de configuración: Muchos proyectos de front-end, como los creados con Node.js, usan archivos .json para configurar dependencias (package.json), variables de entorno, o ajustes de configuración. */

//-----------------------//
//EXERCICIOS JSON

const perfil = {
  nome: "Rafael",
  sobrenoma: "Araujo",
  cidade: "La Plata",
  hobbies: ["Xadrez", "Programar", "Ler"],
};
const perfilJSON = JSON.stringify(perfil);
const perfilCarregado = JSON.parse(perfilJSON);

console.log(perfil);
console.log(perfilJSON);
console.log(perfilCarregado);
console.log(perfilCarregado.nome);

//...

const apiResponse =
  '[{"id": 1, "producto": "Laptop", "precio": 1200}, {"id": 2, "producto": "Mouse", "precio": 25}, {"id": 3, "producto": "Teclado", "precio": 70}]';

// 1. Convierte la cadena JSON en un objeto de JavaScript.
// 2. Imprime el nombre del segundo producto en la lista.
// 3. Calcula e imprime el precio total de todos los productos.
const apiResponseObj = JSON.parse(apiResponse);
console.log(apiResponseObj[1].producto);
let totalPrecio = 0;
for (const objeto of apiResponseObj) {
  totalPrecio += objeto.precio;
}
console.log("Este é o valor total dos produtos: R$ " + totalPrecio);
