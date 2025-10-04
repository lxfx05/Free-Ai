
document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");

  if (firstTool) {
    firstTool.style.cursor = "pointer";
    firstTool.addEventListener("click", () => {
      window.location.href = "https://lxfx05.github.io/Code-translator/";
});
}
});
