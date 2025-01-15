/*utilizando o DOM para selecionar i input*/
const inputItem = document.getElementById("input-item");

const botaoAdicionar =  document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) =>{ //espera um evento 
    evento.preventDefault();//evitar o comportamento padrão do formulário.
    console.log(inputItem.value);
})