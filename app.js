function isElementNearViewport(element, offset) {
    const rect = element.getBoundingClientRect();
    return rect.bottom - offset >= 0 && rect.top - offset <= window.innerHeight;
}

// Función para aplicar el efecto de hover a múltiples clases
function applyHoverEffectOnScroll(classList, offset) {
    classList.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        
        elements.forEach(element => {
            if (isElementNearViewport(element, offset)) {
                element.classList.add('hovered');
            } else {
                element.classList.remove('hovered');
            }
        });
    });
}

// Escucha el evento de desplazamiento de la página
window.addEventListener('scroll', () => {
    const classesToHover = [
        'about-frontend .section-bar-animation > p',
        'about-frontend .bar-animation-outside-right',
        'about-frontend .bar-animation-inside-right',
        'about-frontend .frontend-text',
        'about-frontend .html',
        'about-frontend .css',
        'about-frontend .boopst',
        'about-frontend .js',
        'about-backend .section-bar-animation-b > p',
        'about-backend .bar-animation-outside-left-b',
        'about-backend .bar-animation-inside-left-b',
        'about-backend .backend-text',
        'about-backend .cshar',
        'about-backend .git',
        'about-backend .mysql',
        'about-backend .nodejs',
        'about-backend .react',
        'about-backend .sql',
        'about-backend .server',
        'about-sistemas .section-bar-animation-s > p',
        'about-sistemas .bar-animation-outside-right-s',
        'about-sistemas .bar-animation-inside-right-s',
        'about-sistemas .sistemas-text',
        'about-sistemas .wifi',
        'about-sistemas .lan',
        'about-sistemas .pc',
        'about-sistemas .windows',
        'about-sistemas .debian',
        'about-sistemas .mint',
        'about-sistemas .ubuntu',
        'about-desing .section-bar-animation-d > p',
        'about-desing .bar-animation-inside-left-d',
        'about-desing .bar-animation-outside-left-d',
        'about-desing .desing-text',
        'about-desing .ps',
        'about-desing .ai',
        'about-desing .ae',
        'about-desing .pr',
        'about-desing .ad',
        'about-desing .cd',
        'about-desing .fm',
        'tech-muestra .div-tech-inside-html',
        'tech-muestra .div-tech-inside-css',
        'tech-muestra .div-tech-inside-btp',
        'tech-muestra .div-tech-inside-js',
        'tech-muestra .div-tech-inside-cshar',
        'tech-muestra .div-tech-inside-sql',
        'tech-muestra .div-tech-inside-server',
        'tech-muestra .div-tech-inside-mysql',
        'tech-abajo .div-tech-inside-hardwared',
        'tech-abajo .div-tech-inside-debian',
        'tech-abajo .div-tech-inside-mint',
        'tech-abajo .div-tech-inside-ubuntu',
        'tech-abajo .div-tech-inside-windows',
        'tech-abajo .div-tech-inside-lan',
    ];
    applyHoverEffectOnScroll(classesToHover, 30);
});

// Aplica el efecto al cargar la página
applyHoverEffectOnScroll(classesToHover, 30);




function isElementNearViewportFromBottom(element, offset) {
    const rect = element.getBoundingClientRect();
    return rect.bottom - offset <= window.innerHeight;
}

// Función para aplicar el efecto de hover a múltiples clases
function applyHoverEffectOnScrollFromBottom(classList, offset) {
    classList.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        
        elements.forEach(element => {
            if (isElementNearViewportFromBottom(element, offset)) {
                element.classList.add('hovered');
            } else {
                element.classList.remove('hovered');
            }
        });
    });
}

// Escucha el evento de desplazamiento de la página
window.addEventListener('scroll', () => {
    const classesToHover = [
        'about-frontend .section-bar-animation > p',
        'about-frontend .bar-animation-outside-right',
        'about-frontend .bar-animation-inside-right',
        'about-frontend .frontend-text',
        'about-frontend .html',
        'about-frontend .css',
        'about-frontend .boopst',
        'about-frontend .js',
        'about-backend .section-bar-animation-b > p',
        'about-backend .bar-animation-outside-left-b',
        'about-backend .bar-animation-inside-left-b',
        'about-backend .backend-text',
        'about-backend .cshar',
        'about-backend .git',
        'about-backend .mysql',
        'about-backend .nodejs',
        'about-backend .react',
        'about-backend .sql',
        'about-backend .server',
        'about-sistemas .section-bar-animation-s > p',
        'about-sistemas .bar-animation-outside-right-s',
        'about-sistemas .bar-animation-inside-right-s',
        'about-sistemas .sistemas-text',
        'about-sistemas .wifi',
        'about-sistemas .lan',
        'about-sistemas .pc',
        'about-sistemas .windows',
        'about-sistemas .debian',
        'about-sistemas .mint',
        'about-sistemas .ubuntu',
        'about-desing .section-bar-animation-d > p',
        'about-desing .bar-animation-inside-left-d',
        'about-desing .bar-animation-outside-left-d',
        'about-desing .desing-text',
        'about-desing .ps',
        'about-desing .ai',
        'about-desing .ae',
        'about-desing .pr',
        'about-desing .ad',
        'about-desing .cd',
        'about-desing .fm'
    ];
    applyHoverEffectOnScrollFromBottom(classesToHover, 30);
});

applyHoverEffectOnScrollFromBottom(classesToHover, 30);
