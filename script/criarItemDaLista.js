/*utilizando o DOM para selecionar i input*/
const inputItem = document.getElementById("input-item");

let contador = 0;   //Esta variavel let permite alterar o valor  //Criando o contador da lista

export function criarItemDaLista () {    
    if (inputItem === "") {
        alert("Por favor, insira um item");
        return;
    }

    //Criar uma funçao para add itens na lista seguindo os msm procedimentos do html.

    const itemDaLista = document.createElement("li");              //Criando o elemento li
    const containerItemDaLista = document.createElement("div");    //Criando o elemento div
    containerItemDaLista.classList.add("lista-item-container");     //Adicionando class para a div
    const inputCheckBox = document.createElement("input");          //Criando o elemento input
    inputCheckBox.type = "checkbox";                                //Definindo o type do input

    //Selecionando o id do input da li e adicionando o contador++ para adicionar +1 quando criado a lista. 
    inputCheckBox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");                  //Criando o elemento p
    nomeItem.innerText = inputItem.value;   //nomeItem acessa o texto e atribui no inputItem o valor

    //adicionando um evento de click e uma função anonima no inputchekbox
    inputCheckBox.addEventListener('click', function () {
        if (inputCheckBox.checked) {
            nomeItem.style.textDecoration = 'line-through';
        } else {
            nomeItem.style.textDecoration = "none"
        }
    })

    //Selecionando a div da lista e adiconando um input novo
    containerItemDaLista.appendChild(inputCheckBox);

    //Selecionando a div da lista e adiconando um item novo novo 
    containerItemDaLista.appendChild(nomeItem);

    //Adicionar o containerItemDaLista na variavel const itemDaLista
    itemDaLista.appendChild(containerItemDaLista);


    //usando new Date para criar e manipular datas e horarios
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    //tolocaleDateString usado com 2 argumentos local e as opções dia, mês, ano. ex {weekday: "long"}
    const data = new Date().toLocaleDateString("pt-BR");
    //tolocaleTimeString com 2 argumento local , horas e minutos definidos com "numeric"
    const hora = new Date().toLocaleTimeString("pr-BR", {
        hour: "numeric",
        minute: "numeric"
    })

    // usando um teamplate string pra junta dia data e hora
    const dataCompleta = `${diaDaSemana} ( ${data} ) às ${hora}`;
    //cirando um elemento p no html
    const itemData = document.createElement("p");
    //adicionando o teamplate dentro do itemData que contem a tag p criada no js
    itemData.innerText = dataCompleta;
    //adicionando um classe de style na tag p
    itemData.classList.add('texto-data');
    //Adicionando o item da lista na const itemDaLista que contem a li criada 
    itemDaLista.appendChild(itemData);

   return itemDaLista;
}