function calcular(id) {


    const valor = document.getElementById(id);
    const telaAtual = document.getElementById('numeros-atuais');

    console.log('valor', valor.innerHTML)

    if (parseInt(telaAtual.innerHTML) === 0){
        telaAtual.innerHTML = valor.innerHTML;
    } else {
        console.log(telaAtual.innerHTML.length, 'length');

        if (telaAtual.innerHTML.length >= 16) {
            telaAtual.innerHTML = telaAtual.innerHTML.slice(1, 16);
        }

        telaAtual.innerHTML += valor.innerHTML;
    }
    // console.warn(telaAtual.innerHTML.length, 'AQUI')
    // console.log(parseFloat(telaAtual.innerHTML), 'teste')

}