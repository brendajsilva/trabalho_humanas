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

// Ativar leitura em voz alta
const audioAccessibilityButton = document.getElementById('audio-accessibility');
if (audioAccessibilityButton) {
    audioAccessibilityButton.addEventListener('click', function () {
        // Interrompe qualquer fala em andamento antes de iniciar uma nova
        window.speechSynthesis.cancel();

        const textToRead = document.body.innerText; // Texto da página
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'pt-BR'; // Define o idioma para português
        synth.speak(utterance);
        alert('Leitura em voz alta ativada.');
    });
}

// Interromper leitura ao recarregar a página
window.addEventListener('beforeunload', () => {
    window.speechSynthesis.cancel();
});

