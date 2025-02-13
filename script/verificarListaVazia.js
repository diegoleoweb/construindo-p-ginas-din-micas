//seleciona uma classe com msg de lista vazia
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

//function para verificar a lista vazia e if para adicionar um style caso a lista esteja vazia
function verificarListaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}
//exportando a função verificaListaVazia
export default verificarListaVazia;