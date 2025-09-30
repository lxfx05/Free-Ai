

// Funzione per cambiare tema
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light');
  body.classList.toggle('dark');
}

// Imposta tema iniziale in base alla preferenza del sistema
window.addEventListener('DOMContentLoaded', () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.classList.add(prefersDark? 'dark': 'light');

  // Aggiungi pulsante per cambiare tema
  const themeBtn = document.createElement('button');
  themeBtn.textContent = 'Cambia Tema';
  themeBtn.style.position = 'fixed';
  themeBtn.style.bottom = '20px';
  themeBtn.style.right = '20px';
  themeBtn.style.padding = '10px 15px';
  themeBtn.style.border = 'none';
  themeBtn.style.borderRadius = '8px';
  themeBtn.style.cursor = 'pointer';
  themeBtn.style.backgroundColor = '#007BFF';
  themeBtn.style.color = '#fff';
  themeBtn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  themeBtn.onclick = toggleTheme;

  document.body.appendChild(themeBtn);
});
