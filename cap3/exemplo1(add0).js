// function imprimirNumAnimais(vacas, frangos) {
//   let totalVacas = String(vacas);
//   while (totalVacas.length < 3) {
//     totalVacas = "0" + totalVacas;
//   }

//   let totalFrangos = String(frangos);
//   while (totalFrangos.length < 3) {
//     totalFrangos = "0" + totalFrangos;
//   }

//   console.log(`${totalVacas} vacas`);
//   console.log(`${totalFrangos} frangos`);
// }
// imprimirNumAnimais(100, 11);

function imprimirQuantidadeETipo(numero, tipo) {
  let cadeiaNumero = String(numero);
  while (cadeiaNumero.length < 3) {
    cadeiaNumero = "0" + cadeiaNumero;
  }
  console.log(`${cadeiaNumero} ${tipo}`);
}

function imprimirNumAnimais(vacas, frangos, bois) {
  imprimirQuantidadeETipo(vacas, "Vacas");
  imprimirQuantidadeETipo(frangos, "Frangos");
  imprimirQuantidadeETipo(bois, "Bois");
}

imprimirNumAnimais(15, 39, 5);
