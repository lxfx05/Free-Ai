
document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3");

  if (firstTool) {
    firstTool.style.cursor = "pointer";
    firstTool.addEventListener("click", () => {
      window.location.href = "https://code-translator-xi-dusky.vercel.app/";
});
}

  if (secondTool) {
    secondTool.style.cursor = "default";
    secondTool.addEventListener("click", (e) => {
      e.stopPropagation();
      secondTool.textContent = "Project in via of deployedment, but now is not aviable, come soon later";
      secondTool.style.color = "#ffdddd";
});
}

  if (thirdTool) {
    thirdTool.style.cursor = "default";
    thirdTool.addEventListener("click", (e) => {
      e.stopPropagation();
      thirdTool.textContent = "Project in via of deployedment, but now is not aviable, come soon later";
      thirdTool.style.color = "#ffdddd";
      window.location.href = "https://github.com/lxfx05/Code-gpt";
});
}
});
