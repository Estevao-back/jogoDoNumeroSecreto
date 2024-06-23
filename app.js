let lista = [];
let qntLista = 10;
let tentativas = 1;
numeroSecreto();
let secreto = numeroSecreto();
exibirMensagemInicial();;

function numeroSecreto(){
    let numeroSecretoAle = parseInt(Math.random() * qntLista + 1);
    let quantidadeNumEle = lista.length;
    if (quantidadeNumEle == qntLista) {
        lista = []
    }
    if (lista.includes(numeroSecretoAle)) {
        return numeroSecreto();
    } else {
        lista.push(numeroSecretoAle);
        console.log(lista);
        return numeroSecretoAle;
    }
}

function exibirNaTela(tag, texto){
    let Elementos = document.querySelector(tag);
    Elementos.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function limparTela(){
    valor = document.querySelector('input');
    valor.value = '';
}

function exibirMensagemInicial() {
    exibirNaTela('h1', 'Adivinhe o numero secreto');
    exibirNaTela('p', 'Escolha um número entre 1 a 10');
}


function verificarChute() {
    let valor = document.querySelector('input').value; 
    let numerotentativas = tentativas > 1 ? 'Tentativas' : 'Tentativa';
 if (valor == secreto) {
    let mensagemTentativa = `Você acertou com ${tentativas} ${numerotentativas} `;
    exibirNaTela('h1', mensagemTentativa );
    exibirNaTela('p', `O número secreto é ${secreto}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
 } else {
    if(valor >  secreto) {
        exibirNaTela('h1', 'Você errou');
        exibirNaTela('p'," O número é menor");
        
    }else {
        exibirNaTela('h1', 'Você errou');
        exibirNaTela('p', ' O número é maior');
    }
 } tentativas++
 limparTela();

}

function reiniciarJogo() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
    tentativas = 1;
    limparTela();
    secreto = numeroSecreto();
    exibirMensagemInicial();
}

