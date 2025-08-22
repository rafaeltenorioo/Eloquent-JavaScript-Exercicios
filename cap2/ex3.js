const col = 8;
let linha = "";

for (let i = 0; i < col; i++) {
  if (i % 2 == 0) {
    linha += " ";
  } else {
    linha += "#";
  }
}
for (let i = 0; i < col; i++) {
  if (i % 2 == 0) {
    console.log(linha);
  } else {
    console.log(" " + linha);
  }
}
