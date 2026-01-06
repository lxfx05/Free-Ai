const updateUI = () => {
    // Barra di scorrimento superiore
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const scrollElement = document.getElementById('scrollBar');
    if (scrollElement) {
        scrollElement.style.width = scrolled + "%";
    }
    
    // Animazione comparsa card al volo
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', updateUI);
window.addEventListener('load', updateUI);

// Trigger iniziale per elementi già visibili
setTimeout(updateUI, 100);
