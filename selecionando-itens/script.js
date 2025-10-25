// 1.Seleção por ID:**
//     - Selecione o elemento `<header>` da página utilizando seu `id` e exiba-o no console.

const cabecalho = document.getElementById('cabecalho'); 

console.log(cabecalho);

// ------------------------------------------------------


// 2. **Seleção por Classe:**
//     - Selecione todos os elementos que possuem a classe `grid-section` e exiba a `HTMLCollection` resultante no console.
//     - Acesse e exiba apenas o **primeiro** elemento dessa coleção (o primeiro `grid-section`).

const gridSections = document.getElementsByClassName('grid-section');

console.log(gridSections);
console.log(gridSections[0]);


// ------------------------------------------------------

// 3. **Seleção por Tag:**
//     - Selecione todas as imagens (`<img>`) da página e exiba a `HTMLCollection` no console.
//     - Mostre no console quantas imagens existem no total.


const images = document.getElementsByTagName('img');
console.log(images);
console.log('Total de imagens:', images.length);
// ------------------------------------------------------

// 4. **Seleção com `querySelector`:**
//     - Selecione o primeiro parágrafo (`<p>`) que está dentro de uma `grid-section`.
//     - Selecione o link (`<a>`) que está dentro da seção com `id="contato"`.

const paragrafos = document.querySelector('.grid-section p');
console.log(paragrafos);


const link = document.querySelector('#contato a');
console.log(link);

// -------------------------------------------------------


// 5. **Seleção com `querySelectorAll`:**
//     - Selecione todos os títulos `<h2>` da página e exiba a `NodeList` no console.
//     - **Desafio:** Selecione todos os elementos `<p>` que são filhos diretos de `<footer>` ou de `main`.

const gridSectionAll = document.querySelectorAll('h2');
console.log(gridSectionAll);

const gridSelectorAllMain = document.querySelectorAll('main p');
console.log(gridSelectorAllMain);

const gridSelectorAllFooter = document.querySelectorAll('footer p');
console.log(gridSelectorAllFooter);

// --------------------------------------------------------


// 6. **Iteração com `forEach`:**
//     - Utilizando a `NodeList` de títulos `<h2>` da tarefa anterior, percorra cada título com `forEach` e exiba apenas o texto de cada um no console (use a propriedade `.innerText`).

console.log('Listando os elementos h2:')
gridSectionAll.forEach(function(item) {
    console.log(item.innerText);
});