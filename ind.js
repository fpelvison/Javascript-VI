// TIPOS DE DADOS

/* let x = 10; // number
let y = // Undefined
x = 14.8; */
/*
let x  = 'Olá!'; // string
x = 23; // number
console.log(typeof x);

// BOOLEAN -- VERDADEIRO (TRUE) FALSO (FALSE)

let visualizado = true;
visualizado = 'OK'; // String

console.log(typeof visualizado); // boolean


// NUMBER, STRING, UNDEFINED, BOOLEAN
// TIPOS PRIMITIVOS

let c = 'casa';

let resultado = c + 3; 

console.log(resultado);
*/

// TIPO DE DADO DE REFERENCIA
//Função - Function

//function exibirMensagem(primeiroNome, ultimoNome) {
//  alert(`Olá ${primeiroNome} ${ultimoNome}, tudo bem?`);}
// Chamada ou invocação da função
//exibirMensagem('Ana', 'Silva'); //Argumento
/*
function mediaAritimeticaSimples(a,b) {
 return (a + b) /2;
  //let m = (a + b) /2;
  //return m;
}
let resultado = mediaAritimeticaSimples(10,5); // 7.5

console.log(resultado);
//console.log(mediaAritimeticaSimples(10,5));

resultado = mediaAritimeticaSimples(45, 56);

console.log(resultado);
*/

// TIPOS DE DADOS DE REFERÊNCIAS
// OBJETO -- OBJECT
/*
let titulo = 'Introdução ao Js';
let numPag = '500';

const livro ={
  titulo : 'Introdução ao Js', numPag : '500'
 };
  livro.titulo = 'JavaScript -- Avançado!';
  livro.numPag = '673';

  console.log(livro)

  livro.editora = 'Charles';

  console.log(livro)
*/

const pessoa = {
  primeiroNome: 'Ana',
  ultimoNome: 'Silva',
  endereco: {
    rua : 'parana',
    num : '50'
  },

  nomeCompleto : function() {
    return this.primeiroNome + ' ' + this.ultimoNome;
  }
};

pessoa.celular = '085 99999999'

pessoa.enderecoCompleto = function() {
  return `Rua: ${this.endereco.rua}, ${
    this.endereco.num}.`;
};

function exibeDadosPessoas(p) {
  console.log(`\n 
    Nome: ${p.nomeCompleto()}\n
    Endereço: ${p.enderecoCompleto()}\n
    Celular: ${p.celular}
  `);
}

exibeDadosPessoas(pessoa)


//console.log(pessoa);
//console.log(nomeCompleto());
//console.log(pessoa);



