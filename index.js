import { criarItemDaLista } from "./script/criarItemDaLista.js";
import verificarListaVazia from "./script/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");



botaoAdicionar.addEventListener("click", (evento) => { //espera um evento 
    
    evento.preventDefault();//evitar o comportamento padrão do formulário.
    
    const itemDaLista = criarItemDaLista();

    
    //Adicionando ItemDaLista na variavem const listaDeCompras, linha: 03
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    

})
verificarListaVazia(listaDeCompras);