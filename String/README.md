# STRING
---- TIPO DE DADO PRIMITIVO 
-- String - cadeia de caracteres

let nome = 'Ana';

let idade = 20;

let conc = nome + ' ' + idade + 'Anos.';
# CONCATENAÇÃO
conc = `${nome}, ${idade} anos.`; // Melhor forma de concatenar 

//console.log(conc);

console.log(nome.length); //Mostra quantos caracteres tem minha string.
console.log(nome.toUpperCase()); //Tudo maiusculo.
console.log(nome.toLowerCase()); // Tudo Minusculo.

# Poso pegar informações de uma substring - a contagem sempre começa em (0,1,2, etc.) e coloco a posição em que eu quero que começe a pegar.
--let localizacao = 'Curitiba - PR'; 
//let estado = localizacao.substring(11,13);

# Outra forma de se pegar informações da minha string seria usando o (localizacao.length-2)
let estado = localizacao.substring(localizacao.length-2);

# ABIXO TEMOS UMA STRING
---- Mesmo contendo numeros é considerado string, 

let x =  2.6;  -- number
let y = '3.5'; -- string
let z = '4.2'; -- string

# ALTERAR O TEXTO DE DENTRO DA STRING. COM (replace) -- ALTERA APENAS A STRING - A VARIAVEL NÃO MUDA.

let texto = 'basquete' // Variavel

texto = texto.replace('bas', 'ra'); // Aqui eu mudo o valor da variavel -- texto

let novoTexto = texto.replace('bas', 'ra'); // Aqui mudo o valor da string -- texto
console.log(novoTexto);// Aqui imprimo o valor de -- novotexto

console.log(texto);