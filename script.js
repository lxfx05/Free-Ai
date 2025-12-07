document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3");

  const notAvailableMsg =
    "Project under deployment, but it's not available now. Come back later.";

  // Primo tool: redirect immediato
  if (firstTool) {
    firstTool.style.cursor = "pointer";
    firstTool.addEventListener("click", () => {
      window.location.href = "https://code-translator-xi-dusky.vercel.app/";
    });
  }

  // Secondo tool: messaggio + colore rosso graduale
  if (secondTool) {
    secondTool.style.cursor = "pointer";
    secondTool.addEventListener("click", () => {
      const p = secondTool.querySelector("p");
      p.style.transition = "color 0.6s ease";
      p.textContent = notAvailableMsg;
      p.style.color = "#ff5555";
    });
  }

  // Terzo tool: messaggio + colore arancione graduale + redirect dopo 2s
  if (thirdTool) {
    thirdTool.style.cursor = "pointer";
    thirdTool.addEventListener("click", () => {
      const p = thirdTool.querySelector("p");
      p.style.transition = "color 0.6s ease";
      p.textContent = notAvailableMsg;
      p.style.color = "#ff9933";

      setTimeout(() => {
        window.location.href = "https://code-gpt-lilac.vercel.app/";
      }, 2000);
    });
  }
});
