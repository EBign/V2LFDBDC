function togglemenu() {
    const header = document.querySelector ('header');
    const navbar = document.querySelector ('.menu');
    const ul = document.querySelector ('ul');
    const burger = document.querySelector ('.bouttonnav');
    burger.addEventListener('click', () => {
        header.classList.toggle('montreheader');
        ul.classList.toggle('montreul');
        navbar.classList.toggle('montrenav');
        burger.classList.toggle('croix');
    });
}
togglemenu();

// Définition du titre initial

var initialTitle = document.title;

// Définition du titre alternatif
var alternativeTitle = "Tu t'es pommé ? 🍎";

// Temps d'incativité en millisecondes
var inactivityTime = 10000; // 10 secondes

// Fonction pour changer le titre
function changeTitle() {
    document.title = alternativeTitle;
}

// Fonction pour remettre le titre initial
function resetTitle() {
    document.title = initialTitle;
}

// Détection d'inactivité
var inactivityTimer = setTimeout(changeTitle, inactivityTime);

// Réinitialisation du timer lors d'une activité"
window.addEventListener("mousemove", function() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(changeTitle, inactivityTime);
    resetTitle();
});

window.addEventListener("keypress", function() {
    this.clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout (changeTitle, inactivityTime);
    resetTitle();
});






const items = document.querySelectorAll('.imgcarou');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);