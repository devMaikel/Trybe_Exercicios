const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const reduzido = [];
  // for(i = 0; i < arrays.length; i += 1){
  //   reduzido.push(arrays[i].reduce((result, number) => result += number));
  // }
  arrays.forEach((element, i) => reduzido.push(arrays[i].reduce((result, number) => result += number)));
  console.log(reduzido);
}

flatten();