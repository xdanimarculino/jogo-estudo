//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número de 1 a 10"

let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 100');
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log('aiaiai me cutucaram'); // teste do botao
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
    
  else{
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    }
    else {
      exibirTextoNaTela('p', 'o número secreto é maior');
    }
    tentativa++;
    limparCampo();
  }
  }


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}
// parseInt serve para gerar um número inteiro porque o código Math.random gera números quebrados tipo assim 0,0033. Então colocamos isso e temos ainda que fazer vezes 100 (que no caso é nossa escolha máxima ali e o +1 é apenas pq se colocams até 100 ele vai até 99)

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  console.log('aiaiai nao me cutuca'); //teste do botao
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativa = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
