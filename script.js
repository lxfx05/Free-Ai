document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3");

  // Funzione universale per gestire il redirect con feedback visivo
  const handleRedirect = (element, url) => {
    if (!element) return;

    element.style.cursor = "pointer";
    element.addEventListener("click", () => {
      let p = element.querySelector("p");

      // Se il paragrafo non esiste, lo crea (fallback di sicurezza)
      if (!p) {
        p = document.createElement("p");
        element.appendChild(p);
      }

      p.style.transition = "color 0.6s ease";
      p.style.color = "#008000"; // Verde successo
      p.textContent = "Redirecting now...";

      setTimeout(() => {
        window.location.href = url;
      }, 800); // Tempo uniforme per tutti
    });
  };

  // Configurazione dei tool con i rispettivi link
  handleRedirect(firstTool, "https://code-translator-xi-dusky.vercel.app/");
  
  // Ora il Tool 2 si comporta come gli altri
  handleRedirect(secondTool, "https://ore-li-k.vercel.app/"); 
  
  handleRedirect(thirdTool, "https://codebot-ai.vercel.app/");
});
