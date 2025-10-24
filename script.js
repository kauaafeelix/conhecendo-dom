const cabecalho = document.getElementById('cabecalho'); 

console.log(cabecalho);

const gridSections = document.getElementsByClassName('grid-section');

console.log(gridSections);
console.log(gridSections[0]);

const images = document.getElementsByTagName('img');
console.log(images);

const paragrafos = document.querySelector('.grid-section p');
console.log(paragrafos);

const link = document.querySelector('#contato a');
console.log(link);

const gridSectionAll = document.querySelectorAll('h2');
console.log(gridSectionAll);

const gridSelectorAllMain = document.querySelectorAll('main p');
console.log(gridSelectorAllMain);

const gridSelectorAllFooter = document.querySelectorAll('footer p');
console.log(gridSelectorAllFooter);

console.log('Listando os elementos h2:')
gridSectionAll.forEach(function(item) {
    console.log(item.innerText);
});