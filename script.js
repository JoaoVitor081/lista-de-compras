
const lista = document.querySelector('ul')
const produto = document.getElementById('product')
const butt = document.getElementById('btn')
const but2 = document.getElementById('btn2')

butt.addEventListener('click', addProduto)

function addProduto() {
    const item = '<li>' + produto.value + '<button class="btn2">❌</button></li>';
    lista.innerHTML += item;
    produto.value = '';
    produto.focus();

    const btnDelete = lista.querySelector('li:last-child .btn2');
    btnDelete.addEventListener('click', deleteProduto);
}

function deleteProduto(event) {
    const item = event.target.closest('li');
    item.remove();
}

