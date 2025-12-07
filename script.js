document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3"); // Free Bot

  // Primo tool: redirect normale
  if (firstTool) {
    firstTool.style.cursor = "pointer";
    firstTool.addEventListener("click", () => {
      window.location.href = "https://github.com/lxfx05/Code-translator/tree/main";
    });
  }

  // Messaggio comune per card non disponibili
  const notAvailableMsg =
    "Project under deployment, but it's not available now. Come back later.";

  // Secondo tool: mostra messaggio senza redirect
  if (secondTool) {
    secondTool.style.cursor = "default";
    secondTool.addEventListener("click", () => {
      const p = secondTool.querySelector("p") || secondTool;
      p.textContent = notAvailableMsg;
      p.style.color = "#ffdddd";
    });
  }

  // Terzo tool: stesso messaggio della seconda + redirect
  if (thirdTool) {
    thirdTool.style.cursor = "pointer";
    thirdTool.addEventListener("click", () => {
      const p = thirdTool.querySelector("p") || thirdTool;
      p.textContent = notAvailableMsg;
      p.style.color = "#ffdddd";

      // Redirect dopo un attimo (0.4s)
      setTimeout(() => {
        window.location.href = "https://github.com/lxfx05/Code-gpt";
      }, 400);
    });
  }
});
