function contarBs(nome) {
  let totalBs = 0;
  for (let i = 0; i < nome.length; i++) {
    if (nome[i] === "B") {
      totalBs++;
    }
  }
  console.log(
    "Total de Bs em " +
      nome +
      ": " +
      totalBs +
      "\n" +
      "Posição dos Bs: " +
      imprimeBs(nome)
  );
}

contarBs("Bola de Bilhar");
contarBs("Bebê Bonito");
contarBs("Bicicleta Branca");
contarBs("BBBBBbbbBBB");

function imprimeBs(nome) {
  let contando = "";
  for (let i = 0; i < nome.length; i++) {
    if (nome[i] === "B") {
      // contando += i + "\n";
      contando += "B";
    } else if (nome[i] === " ") {
      contando += " ";
    } else {
      contando += "_";
    }
  }
  return contando;
}
