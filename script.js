document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3");

  // Tool 1 → redirect
  if (firstTool) {
    firstTool.style.cursor = "pointer";
    firstTool.addEventListener("click", () => {
      window.location.href = "https://code-translator-xi-dusky.vercel.app/";
    });
  }

  // Messaggio da mostrare nelle card non disponibili
  const notAvailableMsg = "Project under deployment, currently not available. Come back later.";

  // Tool 2 → mostra messaggio, nessun redirect
  if (secondTool) {
    secondTool.style.cursor = "pointer";
    secondTool.addEventListener("click", (e) => {
      e.stopPropagation();
      showTempMessage(secondTool, notAvailableMsg);
    });
  }

  // Tool 3 → mostra messaggio + opzionale redirect (come nel tuo codice)
  if (thirdTool) {
    thirdTool.style.cursor = "pointer";
    thirdTool.addEventListener("click", (e) => {
      e.stopPropagation();
      showTempMessage(thirdTool, notAvailableMsg);

      // Se vuoi togliere il redirect, cancella questa riga:
      window.location.href = "https://github.com/lxfx05/Code-gpt";
    });
  }

  // Funzione per mostrare un messaggio temporaneo senza distruggere il layout
  function showTempMessage(element, msg) {
    const originalText = element.querySelector("p").textContent;
    const p = element.querySelector("p");

    p.textContent = msg;
    p.style.color = "#ffdddd";

    // Ritorna al testo originale dopo 3 secondi
    setTimeout(() => {
      p.textContent = originalText;
      p.style.color = "";
    }, 3000);
  }
});
