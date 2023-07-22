const boutonsMoins = document.querySelectorAll(".moins");
const boutonsPlus = document.querySelectorAll(".plus");
const quantites = document.querySelectorAll(".num");
const boutonsDelete = document.querySelectorAll(".delete");
const prix = document.querySelectorAll(".price");
console.log(boutonsMoins);

function calculTotal() {
  let total = 0;
  for (let index = 0; index < quantites.length; index++) {
    // on recupère la quantité et on le convertit en entier
    let intQuantity = parseInt(quantites[index].getAttribute("value"));

    // on recupère le prix et on le convertit en entier
    let intPrice = parseInt(prix[index].textContent);

    let sousTotal = intQuantity * intPrice;
    total = total + sousTotal;

    let totalHtml = document.getElementById("total");
    totalHtml.innerText = total;
  }
}

// Boutons Plus
for (let index = 0; index < boutonsPlus.length; index++) {
  // Ajoutons un écouteur d'événement sur tous les boutons Plus
  boutonsPlus[index].addEventListener("click", () => {
    //console.log(boutonsPlus[index]);

    // recupèrons le input contenant la quantité
    let input = boutonsPlus[index].previousElementSibling;
    //console.log(input);

    // recupèrons l'attribut value de l'input
    let value = input.getAttribute("value");
    //console.log(value);

    // convertissons le value en entier
    let intValue = parseInt(value);
    //console.log(intValue);

    // incrémentons le value de 1
    let newValue = intValue + 1;
    console.log(newValue);

    // affectons la nouvelle valeur à l'attribut value de l'input
    input.setAttribute("value", newValue);
    calculTotal();
  });
}
//Boutons Moins
for (let index = 0; index < boutonsMoins.length; index++) {
  boutonsMoins[index].addEventListener("click", () => {
    let input = boutonsMoins[index].nextElementSibling;
    console.log(input);
    let value = input.getAttribute("value");

    let intValue = parseInt(value);

    if (intValue > 0) {
      let newValue = intValue - 1;

      input.setAttribute("value", newValue);
    }
    calculTotal();
  });
}

// Boutons Delete
for (let index = 0; index < boutonsDelete.length; index++) {
  boutonsDelete[index].addEventListener("click", () => {
    let parent = boutonsDelete[index].parentElement;
    let grandParent = parent.parentElement;
    parent.remove();
    calculTotal();
  });
}
console.log(boutonsDelete);
