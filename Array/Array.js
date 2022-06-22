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
*/

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

 