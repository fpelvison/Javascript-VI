/*alert('Olá! sejam bem-vindo!');
document.write('Essa é nossa primeira vídeo aula');


document.querySelector('#t1').textContent = 'JavaScript - introdução';
document.querySelector('#t2').textContent = 'Exemplificando algumas fucionalidades';*/

/*
const nome = prompt('Qual é o seu nome?')
alert(`Que bom ter você aqui ${nome}! \n Vamos começar`)
*/

// Apresenta uma msg e esconde o formulario de login
/*
function bemVindo() {
  const nome = document.querySelector('#usuario').value
  alert(`Olá ${nome}! Seja bem-Vindo!`)
  document.getElementById('Login').style.display = 'none'
}
*/

// Mudando a cor de fundo
/*
function fundocor(){
 const menu = document.querySelector('#cores');
 const cor = menu.options[menu.selectedIndex].value;
 document.body.style.background = cor;
}
*/

//let, function, if, else, while, for, etc.

/* 
var x;

console.log(x);

x=3;

console.log(x); 
*/

/*
let primeiroNome = 'Carlos';
console.log(primeiroNome);

primeiroNome = 'Ana'; // Sobrescrevemos o valor da variavel
console.log(primeiroNome);

let endereco = 'R. Brasil';
console.log(endereco)

// Posso declarar de duas maneiras
/*let a = 2; 
let b = 3;*/
// Tudo na mesma variavel, separados por virgula.
/*
let a, b; 
a=2; b=3;

let soma = a+b;

console.log(soma);

a=10; b=30;
 soma = a+b;

console.log(soma);
*/
// CONSTANTE
/*
const pi = 3.1416;
let raio = 4;
let comprimentoCircuferencia = 2*pi*raio;

console.log(comprimentoCircuferencia);
*/

// OPERADORES ARITMÉTICOS

//Operador de Adição (+)
/*
let a = 6; b = 9;
let soma = a + b;
// OU
/* let soma = 6 + 9;*/
/*
console.log(soma);

let nome = 'Carlos';
let bemVindo = 'Olá ';

let msg = bemVindo + nome; // Se chamar concatenar 

msg = 'Olá ' + 'Carlos! ' + 'Tudo Bem?';

console.log(msg);
*/

// Operador de Subtração (-)

/* let resultado = 7 - 2; 

let a = 7;  b = 2;

let resultado = a - b;

console.log(resultado); 

// Operador de Multiplicação (*)

/* resultado = 7 * 2; 
a = 7; b = 2;

resultado = a * b;

console.log(resultado); */

// Operado de Divisão (/)

/* resultado = 12 / 4 

a = 12; b = 4;

resultado = a / b;

console.log(resultado); */ 

// Operador resto (%)

/* console.log(20/4); ---> = 5 
console.log(21 % 4 ); // Da 5 sobra 1 = o resto da %.

// Operador de exponênciação (**)

console.log(4 ** 2); */

// OPERADORES DE ATRIBUIÇÃO

// Operador de igualdade (=)
/*
let cor = 'amarelo';

console.log(cor);
*/
// Operador *= 
/*
let num = 3
num *=2;

num = num * 2;

console.log(num);

// **=

console.log(num **= 2);

// /=

console.log(num /= 2);

// += 

console.log(num += 2);

// -= 

console.log(num -= 2);
*/
// OPERADORES RELACIONAIS 
// Operador de Maio (>)
/*
let a = 10;
let b = 20;

console.log(a > 10);
*/
// OPERADORES IGUAUDADE

// == NÃO CONSIDERA O TIPO --- SE É STRING OU VAR SE EU USO (===) TRÊS VEZES ELE INDENTIFICA O TIPO DE DADO
/*
let nota1 = 5;
let nota2 =5;

console.log(nota1 == nota2);
*/

// OPERADORES LÓGICOS BINÁRIOS
/*
let a = 2;
let b = 3;
let c = 5;
let d = 7;

console.log(a > b); ---> false

console.log(b > c); ---> false

console.log(c > b); ---> true

console.log((b > c) && (c > b)); ---> false
*/

// OPERADOR INCREMENTAL
// Operador (++)
let x = 10;
let a = ++x; // let a = x + 1;
a = x++; // a = 10 x = 11
console.log(a); a = 11

console.log(x); = 11
console.log(++a); = 11 // a = a + 1;

// OPERADOR DECREMENTAL (--)


