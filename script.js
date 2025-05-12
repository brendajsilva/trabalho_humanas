// Menu Mobile
const menuButton = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('.nav-menu');

if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Fecha o menu mobile se estiver aberto
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Animação do header ao rolar
const header = document.querySelector('.header');
let lastScroll = 0;

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animação de fade-in para elementos quando aparecem na tela
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') &&
        e.target instanceof HTMLElement &&
        !e.target.closest('.nav-menu') &&
        !e.target.closest('.menu-mobile')) {
        navMenu.classList.remove('active');
    }
});

// Efeito de digitação animada para os nomes dos desenvolvedores
const nomes = [
    'Eduardo',
    'Agatha',
    'Guilherme',
    'Brenda',
    'Arthur Abbruzzini'
];
const devNomes = document.getElementById('dev-nomes');
let nomeIndex = 0;
let charIndex = 0;
let typing = true;

function typeNomes() {
    if (!devNomes) return;
    if (typing) {
        if (charIndex < nomes[nomeIndex].length) {
            devNomes.innerHTML = nomes.slice(0, nomeIndex).join(', ') + (nomeIndex > 0 ? ', ' : '') + '<span>' + nomes[nomeIndex].slice(0, charIndex + 1) + '</span>';
            charIndex++;
            setTimeout(typeNomes, 100);
        } else {
            typing = false;
            setTimeout(typeNomes, 700);
        }
    } else {
        if (nomeIndex < nomes.length - 1) {
            nomeIndex++;
            charIndex = 0;
            typing = true;
            setTimeout(typeNomes, 400);
        } else {
            // Exibe todos os nomes completos
            devNomes.innerHTML = nomes.join(', ');
        }
    }
}

if (devNomes) {
    typeNomes();
}

// Scroll reveal effect
document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// Back to Top Visibility
const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Animação para os itens da linha do tempo
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineDots = document.querySelectorAll('.timeline-dot');

function animateTimeline() {
    const windowHeight = window.innerHeight;

    timelineItems.forEach((item, index) => {
        const position = item.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            item.classList.add('visible');
            if (timelineDots[index]) {
                timelineDots[index].classList.add('visible');
            }
        }
    });
}

window.addEventListener('scroll', animateTimeline);

// Inicializa a animação ao carregar a página
animateTimeline();

// Animação para os elementos do rodapé
const footerSections = document.querySelectorAll('.footer-section');

function animateFooter() {
    const windowHeight = window.innerHeight;

    footerSections.forEach(section => {
        const position = section.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateFooter);

// Inicializa a animação ao carregar a página
animateFooter();

// Animação para os títulos do rodapé
const footerTitles = document.querySelectorAll('.footer-section h3');

function animateFooterTitles() {
    const windowHeight = window.innerHeight;

    footerTitles.forEach(title => {
        const position = title.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            title.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateFooterTitles);

// Inicializa a animação ao carregar a página
animateFooterTitles();

// Seleciona todos os títulos
const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

function animateTitles() {
    const windowHeight = window.innerHeight;

    titles.forEach(title => {
        const position = title.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            title.classList.add('visible');
        }
    });
}

// Adiciona o evento de scroll para animar os títulos
window.addEventListener('scroll', animateTitles);

// Inicializa a animação ao carregar a página
animateTitles();

// Animação para os itens de curiosidades
const curiosidadeItems = document.querySelectorAll('.curiosidade-item');

function animateCuriosidades() {
    const windowHeight = window.innerHeight;

    curiosidadeItems.forEach(item => {
        const position = item.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateCuriosidades);

// Inicializa a animação ao carregar a página
animateCuriosidades();

// Animação de deslizar para cima no rodapé
const footerContent = document.querySelector('.footer-content');

if (footerContent) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerContent.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(footerContent);
}
