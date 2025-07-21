// Liste des images et leur type
const images = [
  { src: "ai2.jpeg", isAI: true },
  { src: "real1.jpg", isAI: false },
  { src: "real2.jpg", isAI: false },
  {src: "ai1.jpeg", isAI: true  },
  { src: "real3.jpg", isAI: false },
  { src: "ai3.jpeg", isAI: true }
];

let current = 0;
let score = 0;

function loadImage() {
  document.getElementById("quiz-image").src = images[current].src;
  document.getElementById("feedback").innerText = '';
  document.getElementById("btn-ai").disabled = false;
  document.getElementById("btn-real").disabled = false;
}

function checkAnswer(answer) {
  const isCorrect = answer === images[current].isAI;
  const feedback = document.getElementById("feedback");

  if (isCorrect) {
    feedback.innerText = "✅ Bonne réponse !";
    score++;
  } else {
    feedback.innerText = "❌ Mauvaise réponse.";
  }

  document.getElementById("btn-ai").disabled = true;
  document.getElementById("btn-real").disabled = true;
}

function nextImage() {
  current++;
  if (current >= images.length) {
    showFinalScore();
  } else {
    loadImage();
  }
}

function showFinalScore() {
  document.getElementById("quiz-container").innerHTML = `
    <h2>🎉 Quiz terminé</h2>
    <p>Score final : ${score} / ${images.length}</p>
    <button onclick="restartQuiz()">Rejouer 🔁</button>
  `;
}

function restartQuiz() {
  current = 0;
  score = 0;
  location.reload();
}

window.onload = loadImage;
