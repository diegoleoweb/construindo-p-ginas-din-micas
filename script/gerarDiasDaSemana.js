
function gerarDiaDaSemana() {
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

    return dataCompleta;
}

export default gerarDiaDaSemana;