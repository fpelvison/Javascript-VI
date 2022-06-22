// ARRAYS
// Array - Arranjo - Vetor
/*
// let produtos = ['camiseta','calça', 'blusa'];

let cidades = ['Rio','Londrina', 'Salvador', 'Fortaleza'];

cidades[0] = 'Natal'; // Posso subescrever por cima uma informação.
cidades[2] = 30;
console.log(cidades);


let jogadores = [
  {
    nome: 'Beto',
    posicao: 'Atacante'
  },
  {
    nome: 'Gil',
    posicao: 'Zagueiro'
  },
];

console.log(jogadores);

// SPLIT - DIVIDIR 

const email ='fulano@meuemail.com';

const emailArray = email.split('@'); // Seleciona o ponto onde eu quero que divida as informações.

console.log(emailArray);

const palavraschaves = 'cinema,futebol,televisão,viajem,boliche';
const hobbies = palavraschaves.split(',');
// Duas maneiras de buscas elementos em uma array.
console.log(hobbies[4]);
console.log(hobbies[hobbies.length-2]);

const tiposHobbies = hobbies.toString();
// Juntar todos os elementos do vetor, por um caractere.
//const tiposHobbies = hobbies.join('|');

console.log(typeof tiposHobbies);



 const cidades = [];

// PUSSH - ADICIONA NO FINAL.
//  UNSHIFT - ADICIONA NO COMEÇO.
// POP -REMOVE O ULTIMO ELEMENTO - E RETORNA O ELEMENTO REMOVIDO.
// SHIFT - REMOVE O PRIMEIRO ELEMENTO - E RETORNA O ELEMENTO REMOVIDO.
// SPLISE - REMOVE UM OU MAIS ITEMS UTILIZANDO UM ÍNDICE.
// CONCAT - CONCATENAÇÃO DE ARRAYS 
 cidades.push('Rio','São Paulo');

console.log(cidades);

cidades.push('Cuibá','Brasília');

console.log(cidades);

// UNSHIFT - ADICIONA NO COMEÇO

cidades.unshift('Campinas','Araras');

console.log(cidades);

// POP -REMOVE O ULTIMO ELEMENTO - E RETORNA O ELEMENTO REMOVIDO.

let cidadeRemovida = cidades.pop();

console.log(cidadeRemovida);

console.log(cidades);

// SHIFT - REMOVE O PRIMEIRO ELEMENTO - E RETORNA O ELEMENTO REMOVIDO.

cidadeRemovida = cidades.shift();

console.log(cidadeRemovida);

console.log(cidades);

// SPLISE - REMOVE UM OU MAIS ITEMS UTILIZANDO UM ÍNDICE

const indice = cidades.indexOf('Rio');

console.log(indice);
// POSSO REMOVER UM ELEMENTO COM O SPLICE (cidades.splice(indice,1);) DO COMEÇO ATÉ O FINAL A MENOS QUE EU COLOQUE ATÉ ONDE RETIRAR.

cidades.splice(indice,1);

console.log(cidades);


// CONCAT - CONCATENAÇÃO DE ARRAYS 

  const cidadesInterior = ['Araraqura', 'Araras', "Limeira"];

  console.log(cidadesInterior);

  const regioesMetropolitanas = ['Campinas', 'São Paulo'];

  console.log(regioesMetropolitanas);

  const cidadesInteriorEMetropolitanas = cidadesInterior.concat(regioesMetropolitanas);

  console.log(cidadesInteriorEMetropolitanas);
*/

// ARRAYS.From

const x = Array.from('ABNT')

console.log(x)

// INCLUDES - Testas se algum elemento está presente em uma Array.

const cidades = ['Rio', 'Foz', 'Limeira']

console.log(cidades.includes('Feira de Santana'))

// ITERAR OU PERCORRER - TODOS OS ELEMENTOS DE UM ARRAY
/**/
const jogadores = [
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
  },
  {
    nome: 'Nuno',
    posicao: 'Volante'
  }
];

function obtemNomeJogador(j){
  return j.nome;
}

function obtemPosicaoJogador(j){
  return j.posicao;
}

let nomesJogadores = jogadores.map(obtemNomeJogador);

console.log(nomesJogadores);


let posicoesJogadores = jogadores.map(obtemPosicaoJogador);

console.log(posicoesJogadores);

// FILTER - RETORNA TODO ELEMENTO DO VETOR.

function obtemVolante(jogador) {
  return jogador.posicao === 'Volante';
}

const volantes = jogadores.filter(obtemVolante);

console.log(volantes);

// MAP - ELE RETORNOU O VALOR, CRIOU UM VETOR NOVO RETORNANDO VALORES QUE JA TINHAMOS LÁ DENTRO.
let notas = [7, 9, 2, 5, 4]

function adicionaUmPontoeMeio(notas) {
  return notas +1.5;
}

let notasAtualizadas = notas.map(adicionaUmPontoeMeio)

console.log(notasAtualizadas);


// FOREACH -- PARA CADA - PERCORRE CADA ELEMENTO DO VETOR E JOGA DENTRO DA FUNÇÃO - A FUNÇÃO EXECUTA O CODÍGO E APRESENTA O RESULTADO.

function exibeNomeJogador(jogador) {
  console.log(jogador.nome);
}

jogadores.forEach(exibeNomeJogador);