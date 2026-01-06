const updateUI = () => {
    // Barra di scorrimento superiore
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const scrollBar = document.getElementById('scrollBar');
    if (scrollBar) {
        scrollBar.style.width = scrolled + "%";
    }
    
    // Animazione comparsa card al volo
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
};

// Event listeners
window.addEventListener('scroll', updateUI);
window.addEventListener('load', updateUI);

// Trigger iniziale per elementi già in vista
setTimeout(updateUI, 100);
