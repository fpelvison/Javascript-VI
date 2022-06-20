/*let nome = 'Ana';

let idade = 20;

let conc = nome + ' ' + idade + 'Anos.';

conc = `${nome}, ${idade} anos.`; // Melhor forma de concatenar 

//console.log(conc);
console.log(nome.length); //Mostra quantos caracteres tem minha string.
console.log(nome.toUpperCase()); //Tudo maiusculo.
console.log(nome.toLowerCase()); // Tudo Minusculo.

// Poso pegar informações de uma substring - a contagem sempre começa em (0,1,2, etc.) e coloco a posição em que eu quero que começe a pegar.
let localizacao = 'Curitiba - PR'; 
console.log(localizacao.length); 
//let estado = localizacao.substring(11,13);
//Outra forma de se pegar informações da minha string seria usando o (localizacao.length-2)
let estado = localizacao.substring(localizacao.length-2);
console.log(estado);
*/
// ABAIXO TEMOS UMA STRING.
/*let x = '3.5';
let y = '4.2';

let resultado = x + y;

console.log(resultado);
*/

//  OUTRO METODO PRA SE PEGAR STRING (index.Of(':'))
/*
const frase ='Minha cor favorita é: azul';
const indice = frase.indexOf(':');

const cor = frase.substring(indice+2)

console.log(cor);
*/

//  ALTERAR O TEXTO DE DENTRO DA STRING. COM (replace) -- ALTERA APENAS A STRING - A VARIAVEL NÃO MUDA 
/*
let texto = 'basquete';
texto = texto.replace('bas', 'ra'); // Aqui eu mudo o valor da variavel -- texto
let novoTexto = texto.replace('bas', 'ra'); // Aqui mudo o valor da string -- texto
console.log(novoTexto);
console.log(texto);
*/

let frase = 'A festa ocorrerá no segundo dia do segundo mês';
let novaFrase = frase.replaceAll('segundo','primeiro');

console.log(novaFrase);