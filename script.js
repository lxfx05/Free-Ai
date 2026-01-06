document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3");

  // Funzione universale per il redirect con stile uniforme
  const handleRedirect = (element, url) => {
    if (!element) return;

    element.style.cursor = "pointer";
    element.addEventListener("click", () => {
      let p = element.querySelector("p");

      if (p) {
        p.style.transition = "color 0.6s ease";
        p.style.color = "#4ade80"; // Verde brillante per il feedback
        p.textContent = "Redirecting now...";
      }

      setTimeout(() => {
        window.location.href = url;
      }, 600); 
    });
  };

  // Configurazione Redirect con i link corretti
  if (firstTool) handleRedirect(firstTool, "https://code-translator-xi-dusky.vercel.app/");
  
  // SECONDA CARD: Link aggiornato alla Gallery
  if (secondTool) handleRedirect(secondTool, "https://gallery-blond-six.vercel.app/");
  
  if (thirdTool) handleRedirect(thirdTool, "https://codebot-ai.vercel.app/");
});
