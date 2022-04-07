//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let a = 20, b = 1, c = 179;

if(a <= 0){
    console.log("ângulo inválido!")
} else if(b <= 0){
    console.log("ângulo inválido!")
} else if(c <= 0){
    console.log("ângulo inválido!")
}else if(a + b + c == 180){
    console.log("triângulo confirmado!")
}else {
    console.log("ângulos não formam um triângulo!")
}