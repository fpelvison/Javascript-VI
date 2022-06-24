// LAÇOS DE REPETIÇÃO - LOOPS 
// FOR
// WHILE - ENQUANTO

const operacoes = ['soma', 'subtração', 'multiplicação', 'divisão', ];
/*
//While começa testando uma condição, se ela for verdadeira ele executa o que está dentro o (while{})
// No while declaramos a variavel antes do laço (while)
let i=0; // I - vale 0) Enquanto o (0 for menor que o tamanho do vetor) ele vai executar tudo que está dentro do (while)
while(i < operacoes.length) {
 console.log(operacoes[i]);
  i++; // Lembrar de definir o incremento, (i++) pois se não laço fica se repetindo infinitamente.
}
*/

let j=0;
do {
  console.log(`${j} - ${operacoes[j]}`);
  j++;
} while(j < operacoes.length)


const listanumeros = [23,45,76,12,89];
// No (for) declaramos a variavel dentro laço
for (let i = 0 ; i < listanumeros.length; i++) {
  console.log(listanumeros[i]);
}

// console.log(listanumeros[0]);
// console.log(listanumeros[1]);
// console.log(listanumeros[2]);
// console.log(listanumeros[3]);
// console.log(listanumeros[4]);


// const operacoes = ['soma', 'subtração', 'multiplicação', 'divisão'];

function montarTextoDaLista() {
  let textoDaLista = '';
  // Teste logio com (for)
  for(let i=0; i < operacoes.length; i++) { 
    textoDaLista += '<li>' + operacoes[i] + '</li>';
  }
  console.log(textoDaLista);
  //Fez a concatenação 
  // <li>soma</li>
  // <li>subtração</li>
  // <li>multiplicação</li>
  // <li>divisão</li>
  return textoDaLista;
}

document.querySelector('#listaOperadores').innerHTML = montarTextoDaLista();


// const operacoes = ['soma', 'subtração', 'multiplicação', 'divisão'];

function montarTextoDaLista() {
  let textoDaLista = '';
  // Aqui o (o for) percorre tudo.
  for(let operacao of operacoes) {
    textoDaLista += '<li>' + operacao + '</li>';
  }
  
  //console.log(textoDaLista);
    return textoDaLista;
}

document.querySelector('#listaOperadores').innerHTML = montarTextoDaLista();

let jogadores = [
  {
    nome: 'Beto',
    posicao: 'Atacante'
  },
  {
    nome: 'Gil',
    posicao: 'Zagueiro'
  },
  {
    nome: 'Milton',
    posicao: 'Volante'
  }
];

for(let jogador of jogadores) {
  console.log(jogador.nome);
  console.log(jogador.posicao);
}
