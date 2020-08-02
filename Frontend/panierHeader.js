let i = 0;
let panier = localStorage.getItem("panier");
panier = JSON.parse(panier);
console.log(panier); // A supprimer
panier.produits.forEach(element => {
  document.getElementById('contenuPanier').innerHTML += '<p><strong>' + element.name + '</strong> - ' + element.price + ' € </p>';
  document.getElementById('deroulerPanier').innerHTML = panier.produits.length;
  i++;
})

//Panier déroulant - Ouverture
document.getElementById('deroulerPanier').addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById('monPanier').style.height = "200px";
  document.getElementById('contenuPanier').style.display = "block";
  document.getElementById('fermerPanier').style.display = "block";
  document.getElementById('voirMonpanier').style.display = "block";
})
//Panier déroulant - Fermeture
document.getElementById('fermerPanier').addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById('monPanier').style.height = "0px";
  document.getElementById('contenuPanier').style.display = "none";
  document.getElementById('fermerPanier').style.display = "none";
  document.getElementById('voirMonpanier').style.display = "none";
})
