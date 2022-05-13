const retornoSorteio = (aposta, func) => {
  let a = Math.round(Math.random() * 4 + 1);
  console.log(`Número sorteado: ${a}`);
  func(a, aposta);
}
const checaSorteio = (a, b) => a === b ? console.log('acertou') : console.log('erouuu');
retornoSorteio(4, checaSorteio);


/////

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const auditor = (estudante, gabarito) => {
  let nota = 0;
  for(let i = 0; i < estudante.length; i += 1){
    if (estudante[i] == gabarito[i]) {
      nota += 1;
    }
    if (estudante[i] != gabarito[i] && estudante[i] != 'N.A') {
      nota -= 0.5;
    }
  };
  console.log(`A nota final foi ${nota} pontos!`)
};

const funcRetorno = (a, b, func) => {
  func(a, b);
}

funcRetorno(STUDENT_ANSWERS, RIGHT_ANSWERS, auditor);