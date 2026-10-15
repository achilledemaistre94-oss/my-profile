console.log("behavior.js is running");

// 1. Sélectionner les éléments
const copyButton = document.querySelector(".copy-email");
const email = document.querySelector(".email");

// 2. La fonction qui copie l'e-mail
function copyEmail() {
  navigator.clipboard.writeText(email.textContent);
  copyButton.textContent = "Copié !";

  setTimeout(function () {
    copyButton.textContent = "Copier mon e-mail";
  }, 2000);
}

// 3. Écouter le clic sur le bouton
copyButton.addEventListener("click", copyEmail);