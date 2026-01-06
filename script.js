const updateUI = () => {
    // 1. Aggiornamento barra di scorrimento superiore
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const scrollBar = document.getElementById('scrollBar');
    if (scrollBar) {
        scrollBar.style.width = scrolled + "%";
    }
    
    // 2. Animazione comparsa card (Reveal)
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        // Se l'elemento entra nella visuale (con un margine di 50px)
        if(rect.top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
};

// Event Listeners
window.addEventListener('scroll', updateUI);
window.addEventListener('load', updateUI);

// Trigger iniziale per mostrare gli elementi già visibili al caricamento
setTimeout(updateUI, 100);
