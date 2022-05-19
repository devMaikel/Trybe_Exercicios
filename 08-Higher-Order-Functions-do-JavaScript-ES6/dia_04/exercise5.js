const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
 //Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA() {
  const qtd = names.filter((vezesTotal, nomeAtual) => {
    for(i = 0; i < nomeAtual.length; i += 1){
      console.log('haha');
    }
  }, 0)

  console.log(qtd);
}

containsA();