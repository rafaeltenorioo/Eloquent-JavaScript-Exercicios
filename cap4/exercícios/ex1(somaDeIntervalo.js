function range(inicio, fim) {
  let array = [];

  if (inicio > fim) {
    for (let i = inicio; i >= fim; i--) {
      array.push(i);
    }
    console.log(array);
  } else {
    for (let i = inicio; i <= fim; i++) {
      array.push(i);
    }
    console.log(array);
  }
  return array;
}

// -------------------------------- //

function sum(newArray) {
  let total = 0;
  for (let value of newArray) {
    total += value;
  }
  console.log("Essa é a soma dos itens da lista: " + total);
}

sum(range(5, 2));
sum(range(1, 10));

// -------------------------------- //

function rangeConPaso(inicio, fim, paso) {
  let array = [];

  if (paso == undefined) {
    if (inicio > fim) {
      for (let i = inicio; i >= fim; i--) {
        array.push(i);
      }
      console.log(array);
    } else {
      for (let i = inicio; i <= fim; i++) {
        array.push(i);
      }
      console.log(array);
    }
  } else {
    if (inicio > fim && paso < 0) {
      for (let i = inicio; i >= fim; i = i + paso) {
        array.push(i);
      }
      console.log(array);
    } else {
      for (let i = inicio; i <= fim; i = i + paso) {
        array.push(i);
      }
      console.log(array);
    }
  }

  return array;
}

rangeConPaso(1, 10, 2);
rangeConPaso(5, 2, -1);
rangeConPaso(50, 34, -3);
