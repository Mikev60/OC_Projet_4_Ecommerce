//--------------------------------------------------------Affichage du panier--------------------------------------
if (!localStorage.getItem("panier")) {
  document.getElementById('panier').innerHTML += '<p> Votre panier est vide</p>';
} else {

  document.querySelector('#panier h2').innerHTML += ' (<a href="#" id="viderPanier">Vider</a>) ';
  document.querySelector('#panier h2').innerHTML += '<span id="sommePanier"> </span>';

  let panier = localStorage.getItem("panier");
  panier = JSON.parse(panier);
  majPanierFinal(panier); // affichage du panier
  document.getElementById('viderPanier').addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    alert("Panier vidé");
    document.getElementById('panier').innerHTML = '<p> Votre panier est vide</p>';
  });
}

//Suppresion de l'article du panier
function addListener(i) {
  let panier = localStorage.getItem("panier");
  panier = JSON.parse(panier);
  panier.produits.splice(i, 1);
  localStorage.setItem("panier", JSON.stringify(panier));
  majPanierFinal(panier);
}

// Affichage du panier
function majPanierFinal(panier) {
  let i = 0;
  let sommePanier = 0;
  document.getElementById("contenuPanierFinal").innerHTML = "";
  panier.produits.forEach(element => {
    document.getElementById('contenuPanierFinal').innerHTML += '<div class="contenuPanier"><img src="' + element.imageUrl + '" /><p><strong>' + element.name + '</strong> ('+element.lenses+') - ' + element.price + ' € - <a href="#" onClick="addListener(' + i + ')"> Retirer du panier </a></p></div>';
    sommePanier += element.price;
    i++;
  })
  document.getElementById('sommePanier').innerHTML = ' - Total : ' + sommePanier + ' €';
}
