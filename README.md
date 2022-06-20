# O QUE É JAVASCRIPT?
Html ----> Conteúdo
Css ---->  Estilo
Javascript ----> Comportamento da página

JavaScrip ≠  Java

Desenvolvimento de Página web interativas

Execução do JavaScript ----> Nos navegadores web: Chorme, Firefox... ----> ENIGE(MOTOR) Ler e interpretar o JS

NodeJs ----> Posso executar fora do navegador progama chamado de nodeJs.

 ES6 ----> Estou usando uma implementação sobre as especificações ECMAScript versão 6.
 |
 |
ECMA --- ECMAScript ----> Especificação <---- JavaScript é uma implementação.
 |
 |
Org. de Padronização

# INTRODUÇAÕ AO JS
 document.querySelector('#id').textContent = 'MSG - que eu quero'; ----> Posso mudar o conteud do meu HTML.

 # VARIAVEIS ----> function, if, else, while, for, etc. São palavras reservadas
 Espaço em memoria para guarda uma variavel.
 # VAR
 --> Var ela tem algums problemas, por que ela permite declarar uma mesma variavel com o mesmo nome.

 # LET 
 --> Preferivel usar a palavra resevarda let

# QUANDO USAR LET OU CONTS?
Sempre se pergunte se o valor vai prescisar ser alterado ao longo do código.
----> LET, Posso mundar quando a o valor quando preciso ou tenho nescecidade.
----> CONTS, O valor se mantêm inaterado durante todo o código.

# OPERADORES ARITMÉTICOS
---> O sinal de +, quando usado com números estou somando.
---> Já quando estou usando com uma cadeia de caracteres eu estou concatenando, para ser uma msg so.

# OPERADORES ARITMÉTICOS
//Operador de Adição (+)
  let a = 6; b = 9;
  let soma = a + b;
  OU
  let soma = 6 + 9;

  console.log(soma);

let nome = 'Carlos';
let bemVindo = 'Olá ';

let msg = bemVindo + nome; ----> Se chamar concatenar 

msg = 'Olá ' + 'Carlos! ' + 'Tudo Bem?';

console.log(msg);


# Operador de Subtração (-)

 let resultado = 7 - 2; 
 OU
 let a = 7;  b = 2;
 let resultado = a - b;

console.log(resultado); 

# Operador de Multiplicação (*)

 resultado = 7 * 2; 
 a = 7; b = 2;
 OU

 resultado = a * b;
 console.log(resultado);   

# Operado de Divisão (/)

  resultado = 12 / 4 
  OU
  a = 12; b = 4;

  resultado = a / b;
  console.log(resultado);

# Operador resto (%)

 console.log(20/4); ----> = 5 
console.log(21 % 4 ); ----> Da 5 sobra 1 = o resto da %.

# Operador de exponênciação (**)

console.log(4 ** 2); */

# OPERADORES DE ATRIBUIÇÃO
  
# Operador de igualdade (=)

let cor = 'amarelo';

console.log(cor);

----> Operador *= 

let num = 3
num *=2;

num = num * 2;

console.log(num);

----> **=

console.log(num **= 2);

----> /=

console.log(num /= 2);

----> += 

console.log(num += 2);

----> -= 

console.log(num -= 2);

# OPERADORES RELACIONAIS 
----> Operador de Maio (>)

let a = 10;
let b = 20;

console.log(a > 10);

# OPERADORES IGUAUDADE

// == NÃO CONSIDERA O TIPO ---> SE É STRING OU VAR SE EU USO (===) TRÊS VEZES ELE INDENTIFICA O TIPO DE DADO

let nota1 = 5;
let nota2 =5;

console.log(nota1 == nota2);

# OPERADORES DE NEGAÇÃO ----> NOT - (!)

let conectado = true; ----> Valor armazenado dentro da variavel.
conectado = !conectado;

console.log(!conectado); ---> Variavel vai ser false.

console.log(conectado); ----> Variavel vai ser true.

# DESIGUALDADE !=, !==
----> == Igualdade
----> === Igualdade estrita - exatamente igual.

let nota1 = 5; ---> nuber
let nota2 = '5'; ---> var

console.log(nota1 == nota2); ----> true
console.log(nota1 === nota2); ----> false
console.log(nota1 != nota2); ----> false -- não esta considerando o tipo

console.log(nota1 !== nota2); ----> true
console.log(!(nota1 === nota2)); ----> true

console.log(!(nota1 == nota2)); ----> false

#  OPERADORES LÓGICOS BINÁRIOS

let a = 2;
let b = 3;
let c = 5;
let d = 7;

console.log(a > b); ---> false

console.log(b > c); ---> false

console.log(c > b); ---> true

console.log((b > c) && (c > b)); ---> false // & -- AND -- E

console.log((d > c) && (c > b)); ---> true ----> Apenas vai ser verdadeiro se as duas comparações forem verdadeiras. 

// ||
console.log((d > c) || (c > b)); ---> true || -- OR -- OU
Se ao menos uma delas for verdadeiro o resultado é verdadeiro. Pode ser uma delas ou as duas

# OPERADPOR INCREMENTAL (++)
  let x = 10;
----> Operador (++)
  let x = 10;
  let a = ++x; // let a = x + 1;
  a = x++; // a = 10 x = 11
  console.log(a); a = 11

  console.log(x); = 11
  console.log(++a); = 11 // a = a + 1;

# OPERADOR DECREMENTAL (--)

# TIPO DE DADO DE REFERENCIA
--> Função - Function

# ESCOPO DE VARIAVEIS E CONTANTES

let x = 10;

console.log(x); // VARIAVEL GLOBAL -- PODE SER ACESADA EM QUALQUER PARTE DO ARQUIVO

---> NÃO FICA VISIVEL NO ESCOPO DE TODO O PROJETO A PENAS NA FUNCTION -- QUE É ONDE FICA A FUNÇÃO.

function soma(a, b) {
  let z = a + b;
  return z;
}
console.log(soma(4,23));


# TIPOS DE DADOS DE REFERÊNCIAS
--- OBJETO -- OBJECT

---> Quando temos uma função atrelada a um objeto costumamos chama-la de metodo -- quando ela não esta atrelada a nenhum objeto chamamos de função.

-- console.log(nomeCompleto()); ---> Metodo.

----> THIS - quer dizer estes