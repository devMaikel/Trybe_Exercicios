//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let a = 2, b = 4, c = 12;

if(a%2 !== 0 || b%2 !== 0 || c%2 !== 0){
    console.log("Um dos números é ímpar!")
}else {
    console.log("Nenhum número ímpar foi passado!")
}