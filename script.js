document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3");

  if (firstTool) {
    firstTool.style.cursor = "pointer";
    firstTool.addEventListener("click", () => {
      window.location.href = "https://github.com/lxfx05/Code-translator/tree/main";
    });
  }

  if (secondTool) {
    const secondPara = secondTool.querySelector("p");
    secondTool.style.cursor = "default";
    secondTool.addEventListener("click", () => {
      secondPara.textContent = "Project in via of deployedment, but now is not aviable, come soon later";
      secondPara.style.color = "#ffdddd";
    });
  }

  if (thirdTool) {
    const thirdPara = thirdTool.querySelector("p");
    thirdTool.style.cursor = "pointer";
    thirdTool.addEventListener("click", () => {
      thirdPara.textContent = "Project is being deployed but is available now — please wait... redirecting...";
      thirdPara.style.color = "#ffdddd";

      setTimeout(() => {
        window.location.href = "https://code-gpt-lilac.vercel.app/";
      }, 1300);
    });
  }
});
