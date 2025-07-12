document.addEventListener("DOMContentLoaded", () => {
    const confettiContainer = document.createElement("div");
    confettiContainer.style.position = "fixed";
    confettiContainer.style.top = "0";
    confettiContainer.style.left = "0";
    confettiContainer.style.width = "100vw";
    confettiContainer.style.height = "100vh";
    confettiContainer.style.pointerEvents = "none";
    confettiContainer.style.overflow = "hidden";
    document.body.appendChild(confettiContainer);
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
      confetti.style.setProperty("--i", Math.random());
      confettiContainer.appendChild(confetti);
    }
  });
  