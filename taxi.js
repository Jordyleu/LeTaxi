"use strict";
// Définition du personnage John
const john = {
  nom: "John",
  santeMentale: 10,
};

// Liste de 5 musiques possibles
const musiques = ["In the name of love - Martin Garrix", "Ignite - Eir Aoi", "Rihanna - Diamond", "ramenez la coupe à la maison - Vegedream", "Anissa - Wejdene"];

// Fonction pour choisir une musique aléatoire
function choisirMusique() {
  const index = Math.floor(Math.random() * musiques.length);
  return musiques[index];
}

// Trajet en taxi
const nombreFeuxRouges = 30;
let changementsDeTaxi = 0;

for (let i = 1; i <= nombreFeuxRouges; i++) {
  const musique = choisirMusique();
  console.log(`Feu rouge ${i} - Musique : ${musique}, Feux restants : ${nombreFeuxRouges - i}`);

  if (musique === "Anissa - Wejdene") {
    john.santeMentale--;
    changementsDeTaxi++;
    console.log("john a perdu 1 de santé mentale et a changé de taxi.");
  }

  if (john.santeMentale === 0) {
    console.log("Explosion !");
    break;
  }
}

if (john.santeMentale > 0) {
  console.log("john est bien arrivé à destination après "+changementsDeTaxi+" changements de taxi.");
}