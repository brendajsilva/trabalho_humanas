// Menu Mobile
const menuButton = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('.nav-menu');

if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
    if (
        navMenu &&
        navMenu.classList.contains('active') &&
        e.target instanceof HTMLElement &&
        !e.target.closest('.nav-menu') &&
        !e.target.closest('.menu-mobile')
    ) {
        navMenu.classList.remove('active');
    }
});

