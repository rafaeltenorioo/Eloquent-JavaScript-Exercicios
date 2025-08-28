function promedio(...numeros) {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  console.log(
    "Sua média é: " +
      total / numeros.length +
      "\n" +
      "Suas notas foram: " +
      numeros +
      "\n" +
      "Quantidade de notas: " +
      numeros.length +
      "\n"
  );
}
promedio(1, 2, 3, 4);
promedio(5, 10, 15, 20, 25);
promedio(2, 3, 5, 7, 11, 13, 17, 19);

//-----------------------//

function unirObjetos(...objetos) {
  let objetoUnido = {};
  for (const objeto of objetos) {
    objetoUnido = { ...objetoUnido, ...objeto };
  }
  return objetoUnido;
}

let user = { nombre: "Juan", edad: 30 };
let address = { ciudad: "Buenos Aires", pais: "Argentina" };
let job = { puesto: "Desarrollador Front-End" };

let fullProfile = unirObjetos(user, address, job);
console.log(fullProfile);
