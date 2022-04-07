//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let a = 5, b = 5, c = 3;

if(a == b || a == c){
    a = 0;
}
if(b == c){
    b = 0;
}

if(a > b && a > c){
    console.log(a);
}
else if(b > a && b > c){
    console.log(b);
}
else if(c > a && c > b){
    console.log(c);
}