function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];

    array[i] = array[array.length - 1 - i];

    array[array.length - 1 - i] = temp;
  }
  console.log(array);
}
reverseArrayInPlace([0, 1, 2, 3]);