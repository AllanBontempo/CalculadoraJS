let telaAntigaSemNumero = true;
const telaAtual = document.getElementById('numeros-atuais');
const telaAntiga = document.getElementById('numeros-antigos');


function calcular(id) {


    const valor = document.getElementById(id);

    let somar = false;
    let subtrair = false;
    let multiplicar = false;
    let dividir = false;

    if (valor.innerHTML === '+') {
        somar = true;
        subtrair = false;
        multiplicar = false;
        dividir = false;
    }

    if (valor.innerHTML === '-') {
        somar = false;
        subtrair = true;
        multiplicar = false;
        dividir = false;
    }

    if (valor.innerHTML === '*') {
        somar = false;
        subtrair = false;
        multiplicar = true;
        dividir = false;
    }

    if (valor.innerHTML === '/') {
        somar = false;
        subtrair = false;
        multiplicar = false;
        dividir = true;
    }


    if (dividir || somar || multiplicar || subtrair) {
        if (somar) {
            if (telaAntigaSemNumero) {
                telaAntiga.innerHTML = telaAtual.innerHTML + ' + ';
                telaAtual.innerHTML = '0';
                telaAntigaSemNumero = false;
            } else {
                const valorSomado = (parseFloat(telaAntiga.innerHTML) + parseFloat(telaAtual.innerHTML)) + ' + ';
                telaAntiga.innerHTML = valorSomado.toString();
                telaAtual.innerHTML = '0';
            }
        }

        if (subtrair) {

            if (telaAntigaSemNumero) {
                telaAntiga.innerHTML = telaAtual.innerHTML + ' - ';
                telaAtual.innerHTML = '0';
                telaAntigaSemNumero = false;
            } else {
                const valorSubtraido = ((parseFloat(telaAntiga.innerHTML)) - parseFloat(telaAtual.innerHTML)) + ' - ';
                telaAntiga.innerHTML = valorSubtraido.toString();
                telaAtual.innerHTML = '0';
            }
        }

        if (multiplicar) {
            if (telaAntigaSemNumero) {
                telaAntiga.innerHTML = telaAtual.innerHTML + ' * ';
                telaAtual.innerHTML = '0';
                telaAntigaSemNumero = false;
            } else {
                const valorSubtraido = ((parseFloat(telaAntiga.innerHTML)) * parseFloat(telaAtual.innerHTML)) + ' * ';
                telaAntiga.innerHTML = valorSubtraido.toString();
                telaAtual.innerHTML = '0';
            }
        }

        if (dividir) {
            if (telaAtual.innerHTML === '0') {
                alert('Não se pode dividir por 0');
            } else {
                if (telaAntigaSemNumero) {
                    telaAntiga.innerHTML = telaAtual.innerHTML + ' / ';
                    telaAtual.innerHTML = '0';
                    telaAntigaSemNumero = false;
                } else {
                    const valorSubtraido = ((parseFloat(telaAntiga.innerHTML)) / parseFloat(telaAtual.innerHTML)) + ' / ';
                    telaAntiga.innerHTML = valorSubtraido.toString();
                    telaAtual.innerHTML = '0';
                }
            }
        }

    } else if (parseFloat(telaAtual.innerHTML) === 0){
        telaAtual.innerHTML = valor.innerHTML;
    } else {
        if (telaAtual.innerHTML.length >= 16) {
            telaAtual.innerHTML = telaAtual.innerHTML.slice(1, 16);
        }
        telaAtual.innerHTML += valor.innerHTML;
    }
}

function resultado() {
    if (telaAntigaSemNumero) {
        alert('Informe um sinal para poder achar o resultado!')
    } else {
        const splitSoma = telaAntiga.innerHTML.split(' + ');
        const splitSubtracao = telaAntiga.innerHTML.split(' - ');
        const splitDivisao = telaAntiga.innerHTML.split(' / ');
        const splitMultiplicacao = telaAntiga.innerHTML.split(' * ');

        console.log(splitSoma.length);
        console.log(splitSubtracao.length);
        console.log(splitDivisao.length);
        console.log(splitMultiplicacao.length);

        if (splitSoma.length > 1) {
            telaAntiga.innerHTML = eval(telaAntiga.innerHTML + telaAtual.innerHTML) + ' + ';
        } else if (splitSubtracao.length > 1) {
            telaAntiga.innerHTML = eval(telaAntiga.innerHTML + telaAtual.innerHTML) + ' - ';
        } else if (splitDivisao.length > 1) {
            telaAntiga.innerHTML = eval(telaAntiga.innerHTML + telaAtual.innerHTML) + ' / ';
        } else if (splitMultiplicacao.length > 1) {
            telaAntiga.innerHTML = eval(telaAntiga.innerHTML + telaAtual.innerHTML) + ' * ';
        }
    }

}

function limpar() {
    telaAtual.innerHTML = '0';
    telaAntiga.innerHTML = '0';
}
