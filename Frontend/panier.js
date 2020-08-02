//--------------------------------------------------------Affichage du panier--------------------------------------
if (!localStorage.getItem("panier")) {
  document.getElementById('panier').innerHTML += '<p> Votre panier est vide</p>';
} else {

    document.querySelector('#panier h2').innerHTML += ' (<a href="#" id="viderPanier">Vider</a>) ';
    document.getElementById('viderPanier').addEventListener('click', function(e) {
      e.preventDefault();
      alert("Panier vidé");
    });

  let i = 0;
  let panier = localStorage.getItem("panier");
  panier = JSON.parse(panier);
  console.log(panier); // A supprimer
  panier.produits.forEach(element => {
      document.getElementById('panier').innerHTML += '<div class="contenuPanier"><img src="'+element.imageUrl+'" /><p><strong>' + element.name + '</strong> - ' + element.price + ' € - <a href="#" class="article' + i + '"> Retirer du panier </a> - Position' + i + ' </p></div>';
      document.querySelector('.article' + i + '').addEventListener('click', function(e) {
        e.preventDefault();
        console.log("ok");
        alert("ok");
      })
    i++;
  })
}
