document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3");

  const notAvailableMsg =
    "Project under deployment, but it's not available now. Come back later.";

  // 1️⃣ Primo tool: redirect normale
  if (firstTool) {
    firstTool.style.cursor = "pointer";
    firstTool.addEventListener("click", () => {
      window.location.href = "https://code-translator-xi-dusky.vercel.app/";
    });
  }

  // 2️⃣ Secondo tool: messaggio + colore graduale rosso
  if (secondTool) {
    secondTool.style.cursor = "pointer";
    secondTool.addEventListener("click", () => {
      const p = secondTool.querySelector("p");

      // Attiva transizione armoniosa
      p.style.transition = "color 0.6s ease";

      p.textContent = notAvailableMsg;
      p.style.color = "#ff5555"; // rosso morbido
    });
  }

  // 3️⃣ Terzo tool: messaggio + colore graduale arancione + redirect dopo 2s
  if (thirdTool) {
    thirdTool.style.cursor = "pointer";
    thirdTool.addEventListener("click", () => {
      const p = thirdTool.querySelector("p");

      // Attiva transizione armoniosa
      p.style.transition = "color 0.6s ease";

      p.textContent = notAvailableMsg;
      p.style.color = "#ff9933"; // arancione

      // Redirect dopo 2 secondi
      setTimeout(() => {
        window.location.href = "https://code-gpt-lilac.vercel.app/";
      }, 2000);
    });
Code-gpt
