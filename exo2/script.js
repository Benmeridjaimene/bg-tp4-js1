"use strict"; // Mode strict (slide 51)

/* Exercice 2 : tableau, objet, et tableau d'objets.
   Un clic sur chaque bouton appelle f1, f2 ou f3. (commentaires multi-lignes : slide 36) */

// ----- Types complexes -----

// Tableau de chaînes de caractères (slide 38)
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Objet avec ses propriétés nom, prenom, age (slide 39)
const etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
};

// Tableau d'objets (slide 40)
const listeEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// ----- Fonctions (slide 45) -----

// F1 : affiche chaque élément du tableau sur une ligne
function f1() {
    // Boucle for...of (slide 44)
    for (const e of etudiants) {
        console.log(e);
    }
}

// F2 : affiche l'objet etudiant (la console le rend dépliable : {nom: 'John', ...})
function f2() {
    console.log(etudiant);
}

// F3 : affiche "nom-prenom-age" pour chaque objet du tableau
function f3() {
    // Boucle for...of (slide 44) ; accès aux propriétés avec le point (slide 39) ;
    // concaténation avec + (slide 41)
    for (const e of listeEtudiants) {
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}

// ----- Récupération des boutons : getElementById (slides 59 à 61) -----
const btnTableau = document.getElementById("btn-tableau");
const btnObjet = document.getElementById("btn-objet");
const btnTableauObjets = document.getElementById("btn-tableau-objets");

// ----- Association clic -> fonction : addEventListener (slides 131 à 136) -----
btnTableau.addEventListener("click", f1);
btnObjet.addEventListener("click", f2);
btnTableauObjets.addEventListener("click", f3);
