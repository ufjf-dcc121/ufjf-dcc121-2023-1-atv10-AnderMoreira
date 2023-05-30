const form = document.forms.entrada;

form.addEventListener('submit', envia);

let estado = 0;


function envia(evento)
{
    evento.preventDefault();
    console.log('Formulário Enviado!');
    estado++;
    atualiza();
}


function atualiza()
{
    document.querySelector('ol');
    ol.innerHTML = <li>(estado)</li>;
}