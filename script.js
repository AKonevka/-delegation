let block = document.querySelector('#block');
let element = document.querySelectorAll('.element');
let link = document.querySelectorAll('.element__link');

block.addEventListener('click', (e) => {
    let currentTarget = e.target;
    console.log(currentTarget);
    for (let item of element) {
        item.classList.remove('active');
    }
    currentTarget.classList.add('active');
})

// element.parentElement - родительский элемент.
// element.getAttribute('href') - получить значение указанного атрибута
for (let item of link) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(item.getAttribute('href'));
        item.parentElement.style.backgroundColor = 'green';
        item.parentElement.append(item.getAttribute('href'));

    })
}