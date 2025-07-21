const images = [
  { src: "ai1.jpeg", isAI: true },
  { src: "ai2.jpeg", isAI: true },
  { src: "ai3.jpeg", isAI: true },
  { src: "real1.jpg", isAI: false },
  { src: "real2.jpg", isAI: false },
  { src: "real3.jpg", isAI: false }
];

let currentImage = null;

function choisirImage() {
  const index = Math.floor(Math.random() * images.length);
  currentImage = images[index];
  document.getElementById("image-jeu").src = currentImage.src;
  document.getElementById("feedback").textContent = ""; // Réinitialise le message
}

function deviner(utilisateurPenseAI) {
  const estCorrect = utilisateurPenseAI === currentImage.isAI;
  document.getElementById("feedback").textContent = estCorrect
    ? "✅ Bravo ! Bonne réponse."
    : "❌ Mauvaise réponse. Essaie encore.";
  setTimeout(choisirImage, 2000); // Change l'image après 2 secondes
}

window.onload = choisirImage;
