// Modo noturno
const toggleDarkMode = document.querySelector("#toggle");
let isDarkMode = false;

toggleDarkMode.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    // Alterna entre os modos
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : '');
});

// Seleciona o ícone do menu hambúrguer e a lista do menu
const menuHamburguer = document.getElementById('menu-hamburguer');
const menuLista = document.querySelector('.cabecalho-lista');

// Adiciona um evento de clique para mostrar/ocultar o menu
menuHamburguer.addEventListener('click', () => {
    menuLista.classList.toggle('active');
});

