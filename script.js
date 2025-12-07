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

  // Secondo tool: non disponibile
  if (secondTool) {
    secondTool.style.cursor = "default";
    secondTool.addEventListener("click", () => {
      secondTool.textContent = "Project in via of deployedment, but now is not aviable, come soon later";
      secondTool.style.color = "#ffdddd";
    });
  }

  // Terzo tool (Free Bot): pop-up + redirect
  if (thirdTool) {
  thirdTool.style.cursor = "pointer";

  thirdTool.addEventListener("click", () => {
    thirdTool.textContent = "Project is being deployed — not available right now. Please wait...";
    thirdTool.style.color = "#ffdddd";

    setTimeout(() => {
      window.location.href = "https://code-gpt-lilac.vercel.app/";
    }, 1300);
  });message
