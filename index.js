import { criarItemDaLista } from "./script/criarItemDaLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");



botaoAdicionar.addEventListener("click", (evento) => { //espera um evento 

    evento.preventDefault();//evitar o comportamento padrão do formulário.

    const itemDaLista = criarItemDaLista();

    //Adicionando ItemDaLista na variavem const listaDeCompras, linha: 03
    listaDeCompras.appendChild(itemDaLista)
    verificaListaVazia();

})
//seleciona uma classe com msg de lista vazia
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

//function para verificar a lista vazia e if para adicionar um style caso a lista esteja vazia
function verificaListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}
verificaListaVazia();