const nota = 61;
let estado;

if (nota >= 80){
    console.log("Parabéns, você foi aprovada(o)!");
    estado = "aprovada";
}
else if (nota >= 60 && nota < 80 ){
    console.log("Você está na nossa lista de espera");
    estado = "lista";
}
else if (60 > nota){
    console.log("Você foi reprovada(o)");
    estado = "reprovada";
}

switch (estado) {
    case "aprovada":
        console.log("aprovada");
        break

    case "lista":
        console.log("lista");
        break

    case "reprovada":
        console.log("reprovada");
        break
    
    default:
        console.log("não se aplica")
    
}