import { adicionar, getItems} from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);


atualiza();

function envia(evento)
{
    evento.preventDefault();
    console.log('Formulário Enviado!');
    const n = form.valor.value;
    adicionar(n);
    form.valor.value = "";
    form.valor.focus();
    atualiza();
}

function atualiza()
{
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    const itens = getItems();
    for(let i = 0; i < itens.length; i++) {
        const l1 = documento.createElement('li');
        l1.textContent = itens(i);
        ol.appendChild(li);
    }
    itens().push("Boom!");
    
}