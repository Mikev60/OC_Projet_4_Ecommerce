let i = 0;
let panier = localStorage.getItem("panier");
panier = JSON.parse(panier);

if (!panier || panier.produits.length === 0) {
  document.getElementById('contenuPanier').innerHTML = '<p>Votre panier est vide</p>';
} else {
  majPanier(panier);
}

//Panier déroulant - Ouverture
document.getElementById('deroulerPanier').addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById('monPanier').style.minHeight = "100px";
  document.getElementById('monPanier').style.display = "block";
  document.getElementById('contenuPanier').style.display = "block";
  document.getElementById('fermerPanier').style.display = "block";
  document.getElementById('voirMonpanier').style.display = "block";
  document.getElementById('monPanier').style.border = "1px solid black";
  document.getElementById('monPanier').style.padding = "1rem";
})
//Panier déroulant - Fermeture
document.getElementById('fermerPanier').addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById('monPanier').style.minHeight = "0px";
  document.getElementById('contenuPanier').style.display = "none";
  document.getElementById('fermerPanier').style.display = "none";
  document.getElementById('voirMonpanier').style.display = "none";
  document.getElementById('monPanier').style.border = "none";
  document.getElementById('monPanier').style.padding = "0";
})

function majPanier(panier) {
  document.getElementById('contenuPanier').innerHTML = "<h2> Vos articles : </h2>";
  panier.produits.forEach(element => {
    document.getElementById('contenuPanier').innerHTML += '<p><strong>' + element.name + '</strong> - ' + element.price + ' € </p>';
    document.getElementById('deroulerPanier').innerHTML = panier.produits.length;
    i++;
  })
}
