const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

//4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// escreva filterPeople abaixo

const filterPeople = (arr) => {
  // const pessoaAustralia = people.filter((pessoa) => pessoa.nationality === 'Australian' && pessoa.bornIn <= 2000 ? pessoa : undefined);
  // console.log(pessoaAustralia);
  const abc = arr.filter(({ nationality, bornIn }) => nationality === 'Australian'
  && bornIn <= 2000);
  console.log(abc);
};

filterPeople(people);