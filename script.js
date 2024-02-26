// метод event.stopPropagation() - препятствует продвижению события дальше 
// но на текущем элементе все обработчики обрабатывают

// метод - event.stopImmediatePropagation(); - предотвращает всплытие и останавиливает обработку
// событий на текущем элементе 

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('click', () => {
    console.log('Зелёный погружение');
}, true);
elem1.addEventListener('click', () => {
    console.log('Зелёный всплытие');
}, false);


elem2.addEventListener('click', (event) => {
    console.log('Синий погружения');
}, true);

elem2.addEventListener('click', (event) => {
    console.log('Синий всплытие');
    event.stopImmediatePropagation();
}, false);

elem3.addEventListener('click', () => {
    console.log('Розовый погружение');
}, true);

elem3.addEventListener('click', () => {
    console.log('Розовый всплытие');
}, false);
















let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block = document.querySelector('#block');

button.addEventListener('click', (event) => {
    block.classList.add('active');
    event.stopPropagation();
});

parent.addEventListener('click', () => {
    block.classList.remove('active');
});







