"use strict"; // Mode strict (slide 51)

/* Exercice 1 : un clic sur chaque bouton appelle une fonction (f1...f6)
   qui affiche une valeur dans la console. (commentaires multi-lignes : slide 36) */

// ----- Variables et constantes (slide 51 : let pour variable, const pour constante) -----
const nom = "JOHN";      // type primitif String (slide 37)
const prenom = "DOE";   // type primitif String (slide 37)
let age = 30;            // type primitif number (slide 37)
let note = 15.5;           // type primitif number (slide 37)
const pi = 3.14;         // constante de type number (slides 37 et 51)

// ----- Fonctions (déclaration de fonction : slide 45) -----

// F1 : affiche le nom
function f1() {
    console.log(nom); // sortie uniquement via console.log (slide 37)
}

// F2 : affiche le prénom
function f2() {
    console.log(prenom);
}

// F3 : affiche "Nom-Prénom" ; concaténation avec l'opérateur + (slide 41)
function f3() {
    console.log(nom + "-" + prenom);
}

// F4 : affiche l'âge
function f4() {
    console.log(age);
}

// F5 : affiche la note
function f5() {
    console.log(note);
}

// F6 : affiche Pi
function f6() {
    console.log(pi);
}

// ----- Récupération des boutons : document.getElementById (slides 59 à 61) -----
const btnNom = document.getElementById("btn-nom");
const btnPrenom = document.getElementById("btn-prenom");
const btnNomPrenom = document.getElementById("btn-nomprenom");
const btnAge = document.getElementById("btn-age");
const btnNote = document.getElementById("btn-note");
const btnPi = document.getElementById("btn-pi");

// ----- Association clic -> fonction : addEventListener (slides 131 à 136) -----
// On passe le nom de la fonction (sans parenthèses) : elle sera appelée au clic (slide 136)
btnNom.addEventListener("click", f1);
btnPrenom.addEventListener("click", f2);
btnNomPrenom.addEventListener("click", f3);
btnAge.addEventListener("click", f4);
btnNote.addEventListener("click", f5);
btnPi.addEventListener("click", f6);
