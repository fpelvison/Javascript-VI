# ARRAYS
--- Array - Arranjo - Vetor.

let produtos = ['camiseta','calça', 'blusa'];

let cidades = ['Rio','Londrina', 'Salvador', 'Fortaleza'];

# Posso subescrever por cima uma informação.
cidades[0] = 'Natal';
# Posso adicionar números.
cidades[2] = 30; 
console.log(cidades);

# Outro modelo de vetor.
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

# SPLIT - DIVIDIR 

const email ='fulano@meuemail.com';
# Seleciona o ponto onde eu quero que divida as informações. (split)
const emailArray = email.split('@'); 

console.log(emailArray);

const palavraschaves = 'cinema,futebol,televisão,viajem,boliche';
const hobbies = palavraschaves.split(',');
# Duas maneiras de buscas elementos em uma array.
console.log(hobbies[4]);
console.log(hobbies[hobbies.length-2]); ----> length - Tamanho 

const tiposHobbies = hobbies.toString();
# Juntar todos os elementos do vetor, por um caractere. (join ('|')).
const tiposHobbies = hobbies.join('|');
console.log(typeof tiposHobbies); 

# FORMAS DE ADICIONAR E REMOVER ELEMENTOS DE UM VETOR.

--> PUSSH - ADICIONA NO FINAL.
--> UNSHIFT - ADICIONA NO COMEÇO.
--> POP - REMOVE O ULTIMO ELEMENTO - E RETORNA O ELEMENTO REMOVIDO.
--> SHIFT - REMOVE O PRIMEIRO ELEMENTO - E RETORNA O ELEMENTO REMOVIDO.
--> SPLISE - REMOVE UM OU MAIS ITEMS UTILIZANDO UM ÍNDICE.
--> CONCAT - CONCATENAÇÃO DE ARRAYS 

# ARRAYS.From 
--> Criação de arrays apartir de string.
# FOREACH 
-- PARA CADA - PERCORRE CADA ELEMENTO DO VETOR E JOGA DENTRO DA FUNÇÃO - - A FUNÇÃO EXECUTA O CODÍGO E APRESENTA O RESULTADO.