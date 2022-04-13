let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let letras = nomes[3].split('');

let maior = 0, maiorIndice = 0;

for(key in nomes){
    if((nomes[key].split('').length) > maior){
        maior = (nomes[key].split('').length);
        maiorIndice = key;
    }
}

console.log('indice: ' + maiorIndice + ' quantidade de letras: ' + maior + ' nome do camarada: ' + nomes[maiorIndice]);


// console.log(nomes[3].split('').length);