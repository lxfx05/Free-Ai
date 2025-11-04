document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3");

  // Primo tool: redirect
  if (firstTool) {
    firstTool.style.cursor = "pointer";
    firstTool.addEventListener("click", () => {
      window.location.href = "https://github.com/lxfx05/Code-translator/tree/main";
    });
  }

  // Funzione generica per tool non disponibile
  const unavailableTool = (tool) => {
    if (!tool) return;
    tool.style.cursor = "default";
    tool.addEventListener("click", () => {
      tool.textContent = "Project in via of deployedment, but now is not aviable, come soon later";
      tool.style.color = "#ffdddd"; // evidenzia il testo
    });
  };

  // Applica a seconda e terza card
  unavailableTool(secondTool);
  unavailableTool(thirdTool);
});
