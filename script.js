document.addEventListener('DOMContentLoaded', () => {
    const scrollBar = document.getElementById('scrollBar');
    const revealElements = document.querySelectorAll('.reveal');

    // Funzione aggiornamento UI (Scroll + Reveal)
    const updateUI = () => {
        // Scroll progress
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollBar.style.width = scrolled + "%";

        // Reveal animation
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('active');
            }
        });
    };

    // Simulazione dati live
    const simulateData = () => {
        // CPU random (15% - 95%)
        const cpu = Math.floor(Math.random() * (95 - 15) + 15);
        document.getElementById('cpu-val').innerText = `${cpu}%`;

        // Update mini bar chart
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            const randomHeight = Math.floor(Math.random() * 100);
            bar.style.height = `${randomHeight}%`;
        });

        // Latency random
        const latency = Math.floor(Math.random() * (40 - 10) + 10);
        document.getElementById('latency-val').innerText = `${latency}ms`;
    };

    // Event Listeners
    window.addEventListener('scroll', updateUI);
    window.addEventListener('resize', updateUI);
    
    // Inizializzazione
    updateUI();
    setInterval(simulateData, 3000); // Aggiorna dati ogni 3 secondi
});

// Funzione per il bottone Refresh
function refreshMetrics() {
    const btn = document.querySelector('.btn-p');
    btn.innerText = "REFRESHING...";
    btn.style.opacity = "0.5";
    
    setTimeout(() => {
        btn.innerText = "REFRESH";
        btn.style.opacity = "1";
    }, 1000);
}
