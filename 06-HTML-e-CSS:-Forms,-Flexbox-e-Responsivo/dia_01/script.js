let envButton = document.getElementById('enviar-button');
envButton.addEventListener('click', function (event){
    event.preventDefault();
    let a = document.createElement('h3');
    a.innerText = 'vai enviar nada não magão...'
    document.getElementById('main-div').appendChild(a);
})

let apagarButton = document.getElementById('apagar-button');
apagarButton.addEventListener('click', function (event){
    event.preventDefault();
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('destino-1').checked = false;
    document.getElementById('destino-2').checked = false;
    document.getElementById('destino-3').checked = false;
    document.getElementById('destino-4').checked = false;
    document.getElementById('texto-resposta').value = '';
    document.getElementById('input-data').value = '';
    document.getElementById('checkbox-1').checked = false;
    document.getElementById('checkbox-2').checked = false;
})