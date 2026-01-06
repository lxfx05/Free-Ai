document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3");

  // Funzione universale per il redirect con feedback visivo
  const handleRedirect = (element, url) => {
    if (!element) return;

    element.style.cursor = "pointer";
    element.addEventListener("click", () => {
      let p = element.querySelector("p");

      if (p) {
        p.style.transition = "color 0.6s ease";
        p.style.color = "#4ade80"; // Verde successo
        p.textContent = "Redirecting now...";
      }

      setTimeout(() => {
        window.location.href = url;
      }, 600); 
    });
  };

  // 1. Code Translator
  if (firstTool) handleRedirect(firstTool, "https://code-translator-xi-dusky.vercel.app/");
  
  // 2. Gallery (Link aggiornato)
  if (secondTool) handleRedirect(secondTool, "https://gallery-blond-six.vercel.app/");
  
  // 3. CodeBot AI
  if (thirdTool) handleRedirect(thirdTool, "https://codebot-ai.vercel.app/");
});
