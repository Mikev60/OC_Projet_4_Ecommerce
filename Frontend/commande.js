
// Création de l'objet contact à l'envoi du formulaire
document.getElementById("form").addEventListener("submit", function() {
  let contact = {
    nom: document.querySelector("#nom").value,
    prenom: document.querySelector("#prenom").value,
    adresse: document.querySelector("#adresse").value,
    ville: document.querySelector("#ville").value,
    email: document.querySelector("#email").value
  }
});

//Création du tableau de produits
let panier = localStorage.getItem("panier");
panier = JSON.parse(panier);
let products = [];
panier.produits.forEach(element => {
  products.push(element._id);
})
console.log(products);
