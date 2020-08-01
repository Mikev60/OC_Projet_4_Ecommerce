
// Création de l'objet contact à l'envoi du formulaire
document.getElementById("form").addEventListener("submit", function() {
  let contact = {
    nom: document.querySelector("#nom").value,
    prenom: document.querySelector("#prenom").value,
    adresse: document.querySelector("#adresse").value,
    ville: document.querySelector("#ville").value,
    email: document.querySelector("#email").value
  }
  //Création du tableau de produits
  let panier = localStorage.getItem("panier");
  panier = JSON.parse(panier);
  let products = [];
  panier.produits.forEach(element => {
    products.push(element._id);
  })
  console.log(products);

  //Envoi des données à l'API
  let requete = new XMLHttpRequest();
  let url = 'http://localhost:3000/api/cameras/order';
  requete.open("POST", url);
  requete.setRequestHeader("Content-Type", "application/json");

  requete.addEventListener("load", function() {
    alert(requete.responseText);
  })

  let envoi = JSON.stringify({contact,products});
  requete.send(envoi);
});
