// Condicionais
/*
let n1 = 3;
let n2 = 9;

function media(n1, n2) {
  return (n1 + n2)/2;
}

let resultado = media (n1, n2);

// Operador -- ( OU || ) Condição onde pelos menos 1 teria que ser verdadeira.

if (n1 === 0 || n2 === 0) {
  console.log(`Desclasificado, pois pelo menos uma das notas é igual a 0.`)
} else {
  console.log(`Clasificado, pois pelo menos uma das notas é igual a 0.`)
}

// Operador -- ( && ) Ambas  devem ser verdadeiras

if (n1 > 2 && n2 > 7) {
  console.log(`Você teve um excelente desempenho.`)
} else {
  console.log(`Você teve um desempenho razoável ou satisfatório.`)
}
//console.log(resultado);

// if - se... Se maior ou igual --- else - senão... faça isso.  

if(resultado >= 6) {
  console.log(`Aprovado com média ${resultado}.`);
} else if(resultado >=4) {
  console.log(`Em recuperação com média ${resultado}.`);
} else {
  console.log(`Reprovado! média ${resultado}.`);
}
*/

// OPERADOR TENARIO - 3 OPERADORES
/*
let n1 = 0;
let n2 = 9;

function media(n1, n2) {
  return (n1 + n2)/2;
}

let resultado = media (n1, n2);

//let situacao = resultado >=6 ? 'Aprovado' : 'Reprovado';
let situacao = (resultado >=6) ? `Aprovado com média ${resultado}`:
               (resultado >=4) ? `Em recuperação com média ${resultado}` :
                                 `Reprovado com média ${resultado}`;

if (resultado >= 6) {
  situacao = 'Aprovado'
} else if (resultado >=4) {
  situacao = 'Recuperção'
} else {
  situacao = 'Reprovado'

}
console.log(situacao);
*/

// CONDICIONAIS (SWITCH)

let opc = 2
/*
switch (opc) {
  case 1:
    console.log('Entrega econômica em até 10 dias úteis.');
    break;
  case 2:
    console.log('Entrega normal em até 3 dias úteis');
    break;
  case 3:
    console.log('Entrega expressa em até 1 dias útil');
    break;
  default:
    console.log('Opção de entrega inválida');
    break;

}
*/

opc = 'economica'

switch (opc) {
  case 'economica':
    console.log('Entrega econômica em até 10 dias úteis.');
    break;
  case 'normal':
    console.log('Entrega normal em até 3 dias úteis');
    break;
  case 'expressa':
    console.log('Entrega expressa em até 1 dias útil');
    break;
  default:
    console.log('Opção de entrega inválida');
    break;

}
