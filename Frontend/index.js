fetch('http://localhost:3000/api/cameras')
.then(response => {
  return response.json();
})
.then(cameras => {
  cameras.forEach(element => {

    //Conversion de l'url pour une URL plus lisible (seo ?)
    document.getElementById('content').innerHTML += '<div class="blocProduit"><h2>'+element.name+'</h2> <img width=100 height=100 src="'+element.imageUrl+'"/> <p>'+element.price+' €</p> <br> <a href="produit.html?produit='+element.name+'" class="lienProduit">Voir la fiche produit</a></div>';
  })
})

//Panier déroulant - Ouverture
document.getElementById('deroulerPanier').addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById('monPanier').style.height = "200px";
  document.getElementById('contenuPanier').style.display = "block";
  document.getElementById('fermerPanier').style.display = "block";
})
//Panier déroulant - Fermeture
document.getElementById('fermerPanier').addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById('monPanier').style.height = "0px";
  document.getElementById('contenuPanier').style.display = "none";
  document.getElementById('fermerPanier').style.display = "none";
})
