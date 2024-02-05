const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.add('is-flipped');
});

const feuilles_ete = [];
const nombre_feuilles_ete = 15;
let anime_ete;
const feuilles_purple = [];
const nombre_feuilles_purple = 15;
let anime_purple;

function creer_elements_animes() {
  for (let i = 0; i < nombre_feuilles_ete; i++) {
    const feuille = document.createElement("div");
    feuille.setAttribute("class", "feuille_ete"); 
    feuille.y = Math.random()*window.innerHeight; 
    feuille.x = i*window.innerWidth/nombre_feuilles_ete; 
    feuille.rotation = Math.random()*360; 
    feuilles_ete.push(feuille); 
  }

  for (let i = 0; i < nombre_feuilles_purple; i++) {
    const feuille = document.createElement("div");
    feuille.setAttribute("class", "feuille_purple"); 
    feuille.y = Math.random()*window.innerHeight; 
    feuille.x = i*window.innerWidth/nombre_feuilles_purple; 
    feuille.rotation = Math.random()*360; 
    feuilles_purple.push(feuille); 
  }
}

function load() {
    for (let i = 0; i < nombre_feuilles_ete; i++) {
      document.body.appendChild(feuilles_ete[i]); 
    }
    anime_ete = setInterval(animation_ete, 5);
    for (let i = 0; i < nombre_feuilles_purple; i++) { // Pour chaque flacon de neige
      document.body.removeChild(feuilles_purple[i]); // Désaffiche le flacon de l'écran
    }
    clearInterval(anime_purple); // Arrête l'animation de l'hiver
}

function loadpurple() {
  for (let i = 0; i < nombre_feuilles_purple; i++) {
    document.body.appendChild(feuilles_purple[i]); 
  }
  anime_purple = setInterval(animation_purple, 5);
  for (let i = 0; i < nombre_feuilles_ete; i++) { // Pour chaque flacon de neige
    document.body.removeChild(feuilles_ete[i]); // Désaffiche le flacon de l'écran
  }
  clearInterval(anime_ete); // Arrête l'animation de l'hiver
}



function animation_ete() { // Pour l'été
  for (let i = 0; i < feuilles_ete.length; i++) { // Les instructions suivantes s'affectent à chaque feuille de l'été
      feuilles_ete[i].y += 1; // Augmente la valeur de la variable stockant la position de la feuille sur l'axe vertical
      feuilles_ete[i].rotation += 0.5; // Augmente la valeur de la variable stockant l'ange de la feuille
      if (feuilles_ete[i].y > window.innerHeight) { // Vérifie si la feuille a dépassé les limites de l'écran
          feuilles_ete[i].y = Math.random()*(-20) - 20; // Si les limites sont dépassés, la feuille est remontée
      }
      feuilles_ete[i].style.top = feuilles_ete[i].y.toString() + "px"; // Met à jour la position verticale de la feuille sur l'écran
      feuilles_ete[i].style.left = (Math.sin(feuilles_ete[i].y*0.01)+feuilles_ete[i].x).toString() + "px"; // Met à jour la position de la feuille sur l'axe horizontale, en utilisant la fonction sinus pour obtenir un mouvement oscillatoire
      feuilles_ete[i].style.webkitTransform = "rotate(" + feuilles_ete[i].rotation.toString() + "deg)"; // Met à jour la rotation de la feuille
  }
}

function animation_purple() { // Pour l'été
  for (let i = 0; i < feuilles_purple.length; i++) { // Les instructions suivantes s'affectent à chaque feuille de l'été
      feuilles_purple[i].y += 1; // Augmente la valeur de la variable stockant la position de la feuille sur l'axe vertical
      feuilles_purple[i].rotation += 0.5; // Augmente la valeur de la variable stockant l'ange de la feuille
      if (feuilles_purple[i].y > window.innerHeight) { // Vérifie si la feuille a dépassé les limites de l'écran
          feuilles_purple[i].y = Math.random()*(-20) - 20; // Si les limites sont dépassés, la feuille est remontée
      }
      feuilles_purple[i].style.top = feuilles_purple[i].y.toString() + "px"; // Met à jour la position verticale de la feuille sur l'écran
      feuilles_purple[i].style.left = (Math.sin(feuilles_purple[i].y*0.01)+feuilles_purple[i].x).toString() + "px"; // Met à jour la position de la feuille sur l'axe horizontale, en utilisant la fonction sinus pour obtenir un mouvement oscillatoire
      feuilles_purple[i].style.webkitTransform = "rotate(" + feuilles_purple[i].rotation.toString() + "deg)"; // Met à jour la rotation de la feuille
  }
}

function handleYesClick(event) {
  // Handle YES button click here
  document.getElementById('card__header').style.backgroundImage = 'linear-gradient(to bottom left, #8848fe 10%, #7b48fe 115%)';
  // Prevent event propagation to avoid triggering the card flip effect
  document.getElementById("heart").className = "fa-solid fa-heart";
  loadpurple();
  event.stopPropagation();
}

function handleNoClick(event) {
  // Handle YES button click here
  document.getElementById('card__header').style.backgroundImage = 'linear-gradient(to bottom left, var(--primary) 10%, var(--secondary) 115%)';
  // Prevent event propagation to avoid triggering the card flip effect
  document.getElementById("heart").className = "fa-solid fa-heart-crack";
  load();
  event.stopPropagation();
}

creer_elements_animes();
load();