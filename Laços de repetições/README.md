# LAÇOS DE REPETIÇÃO - LOOPS 
// LAÇOS DE REPETIÇÃO - LOOPS 
// FOR
// WHILE - ENQUANTO


# While começa testando uma condição, se ela for verdadeira ele executa o que está dentro o (while{})
--> No while declaramos a variavel antes do laço (while)
--> I - vale 0) enquanto o (0 for menor que o tamanho do vetor) ele vai executar tudo que está dentro do (while) vertor (['soma', 'subtração', 'multiplicação', 'divisão', ];) 4 
--> Lembrar de definir o incremento, (i++) pois se não laço fica se repetindo infinitamente.

let i=0;
while(i < operacoes.length) {
 console.log(operacoes[i]);
  i++; 
}
# length
Verifica quantos indece tem a variavel exemplo (0,1,2,3); Sempre começando o indece em zero.
# document.querySelector
--> Posso modificar meu (HTML) diretamente pelo o arquivo JS. Exemplo montar lista.
document.querySelector('#listaOperadores').innerHTML = montarTextoDaLista();
