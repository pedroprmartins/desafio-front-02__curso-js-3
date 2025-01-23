
function alterarStatus(id) {
    let minhaLi = document.getElementById(`game-${id}`);

    let divImg = minhaLi.querySelector('.dashboard__item__img');
    let tagPnome = minhaLi.querySelector('.dashboard__item__name');
    let tagAbotao = minhaLi.querySelector('.dashboard__item__button');

    divImg.classList.toggle('dashboard__item__img--rented');
    tagAbotao.classList.toggle('dashboard__item__button--return');

    if (tagAbotao.classList.contains('dashboard__item__button--return')) {
        tagAbotao.textContent = 'Devolver';
    } else {
        tagAbotao.textContent = 'Alugar';
    }
}

/**
 Desafios extras para implementar depois:

 1 - No projeto Alugames, uma confirmação ao devolver um jogo, solicitando ao usuário que confirme a devolução antes que ela seja concluída.
 Isso pode ajudar a evitar devoluções acidentais.

 2 - No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.

 3 - Crie um programa que verifica se uma palavra ou frase é um palíndromo.

 4 - Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
 */