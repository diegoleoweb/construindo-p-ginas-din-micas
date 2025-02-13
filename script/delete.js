import { criarItemDaLista } from "./criarItemDaLista";

const btnDelet =  document.createElement("button");
btnDelet.textContent = "remover item"; 
btnDelet.style.marginLeft = "10px";

btnDelet.addEventListener("click", () =>{
    criarItemDaLista.removeChild(li);
    criarItemDaLista.removeChild(dataCompleta);
    
});

export default btnDelet;