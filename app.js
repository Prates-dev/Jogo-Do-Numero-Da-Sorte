let numerosJaUtilizados = [];
let numeroLimite = 10;
let numeroSecreto = 0
let tentativas = 0;

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    limparCampo();
}

function exibirTextoNaTela(tag, texto) {
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function verificarChute() {  
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavra = tentativas > 1 ? 'tentativas': 'Tentativa';
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavra}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número sercreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número sercreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {

    let quantidadeLista = numerosJaUtilizados.length;
    let numeroSecreto = parseInt(Math.random() * numeroLimite + 1);

    if (quantidadeLista == numeroLimite) {
        numerosJaUtilizados = [];        
    }

    if(numerosJaUtilizados.includes(numeroSecreto)) {
        return gerarNumeroAleatorio();
    } else {
        numerosJaUtilizados.push(numeroSecreto);
        console.log(numerosJaUtilizados);
        return numeroSecreto;
    }







}

function limparCampo() {
    document.querySelector('input').value = '';
}

novoJogo();