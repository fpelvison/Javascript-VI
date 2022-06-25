const lista = document.querySelector('#lista') // No (ul - no pai)

const elementoLI = document.createElement('li') // Aqui foi criado um novo elemento html e colocamos um texto dentro.
elementoLI.textContent = 'Um novo item na lista' // Aqui adiciona um novo elemento a minha lista no caso foi ('Um novo item na lista';)

//lista.appendChild(elementoLI); // Para adicionar - fazer parte da lista.

// Abaixo foi criado um laço (for of) onde eu removo os nós filho da minha lista, e todos serão apagados. Neste casso não apagamos a minha (UL)
const filhosDaLista = lista.querySelectorAll('li')
// filhosDaLista é um vetor de objetos
for (filho of filhosDaLista) {
  //lista.removeChild(filho);
}

//Abaixo tenho duas formas de cria um nova class e adicionar atributos via JS e o nome da class. Sem editar o CSS
//lista.setAttribute('class', 'novoponteiro');
//lista.className ='novoponteiro';

// Aqui posso remover o atributo class.
//lista.removeAttribute('class');

lista.style.color = 'red'

// lista.remove() // Aqui posso remove toda miha lista

const botao = document.querySelector('button')
botao.addEventListener('click', function () {
  lista.remove();
})

console.log(lista)
