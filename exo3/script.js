"use strict"; // Mode strict (slide 51)

/* Exercice 3 : délibération.
   Contrainte : EXACTEMENT 2 fonctions : A (appelée au clic) qui appelle B.
   B prend un seul paramètre float et retourne un booléen.
   (commentaires multi-lignes : slide 36) */

// Données Students : tableau d'objets (slide 40)
// Champs : id, nom, prenom, moyenne (4e valeur), autre (5e valeur, non utilisée ici)
const Students = [
    { id: 1000, nom: "JOHN",   prenom: "DOE",     moyenne: 14, autre: 5 },
    { id: 2000, nom: "BOB",    prenom: "CARLTON", moyenne: 7,  autre: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH",   moyenne: 13, autre: 3 }
];

// Seuil d'admission (constante : slide 51)
const SEUIL = 10;

// Fonction B : un seul paramètre de type float (number en JS, slide 37)
// et retourne un booléen (slide 37). Opérateur de comparaison >= (slide 41).
function B(moyenne) {
    return moyenne >= SEUIL;
}

// Fonction A : appelée au clic, parcourt les étudiants et appelle B
function A() {
    // Boucle for...of (slide 44) (forEach nécessiterait une 3e fonction)
    for (const s of Students) {
        // Condition if...else (slide 42) selon le booléen retourné par B
        if (B(s.moyenne)) {
            // Concaténation avec + (slide 41), affichage un par un avec console.log
            console.log(s.id + ": ADMIS");
        } else {
            console.log(s.id + ": AJOURNÉ");
        }
    }
}

// Récupération du bouton : getElementById (slides 59 à 61)
const btnDeliberation = document.getElementById("btn-deliberation");

// Clic -> A : on passe directement A (slide 136), sans créer de fonction anonyme
btnDeliberation.addEventListener("click", A);
