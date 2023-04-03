let counter = 0;

function increment() {
  counter++;
}

function showValue() {
  console.log(counter);
}

increment(); // affiche rien
increment(); // affiche rien
showValue(); // affichera "2"
increment(); // affiche rien
showValue(); // affichera "3"
