document.addEventListener("DOMContentLoaded", () => {
  const firstTool = document.getElementById("tool-1");
  const secondTool = document.getElementById("tool-2");
  const thirdTool = document.getElementById("tool-3");

  const notAvailableMsg =
    "Project under deployment, but it's not available now. Come back later.";

  if (firstTool) {
  firstTool.style.cursor = "pointer";
  firstTool.addEventListener("click", () => {
    let p = firstTool.querySelector("p");

    if (!p) {
      p = document.createElement("p");
      firstTool.appendChild(p);
    }

    p.style.transition = "color 0.6s ease";
    p.style.color = "#008000"; 
    p.textContent = "Redirecting now...";

    setTimeout(() => {
      window.location.href = "https://code-translator-xi-dusky.vercel.app/";
    }, 500); 
  });
  }
  
  
  if (secondTool) {
    secondTool.style.cursor = "pointer";
    secondTool.addEventListener("click", () => {
      const p = secondTool.querySelector("p");
      p.style.transition = "color 0.6s ease";
      p.textContent = notAvailableMsg;
      p.style.color = "#ff5555";
    });
  }

  if (thirdTool) {
    thirdTool.style.cursor = "pointer";
    thirdTool.addEventListener("click", () => {
      const p = thirdTool.querySelector("p");
      p.style.transition = "color 0.6s ease";
      p.style.color = "#008000"; 
      p.textContent = "Redirecting now...";
      

      setTimeout(() => {
        window.location.href = "https://codebot-ai.vercel.app/";
      }, 2000);
    });
  }
});
