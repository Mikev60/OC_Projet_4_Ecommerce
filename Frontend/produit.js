let url = window.location.search;
let searchUrl = new URLSearchParams(url);

// ---------------------------------------- Affichage du produit -------------------------------------------------
if (searchUrl.has("produit")) {

  //Requête fetch
  fetch('http://localhost:3000/api/cameras')
    .then(function(response) {
      return response.json();
    })
    .then(function(produit) {
      produit.forEach(element => {

        // Récupération url, conversion string et mise en forme pour recherche
        let urlProduit = String(searchUrl.getAll("produit"));

        //Affichage du produit
        if (urlProduit == element.name) {
          document.getElementById('content').innerHTML += '<a href="#" class="lienProduit">' + element.name + '</a>';
          document.getElementById('content').innerHTML += '<p>' + element.description + '</p>';
          document.getElementById('content').innerHTML += '<p>' + element.price + '</p>';
          document.getElementById('content').innerHTML += '<a href="" id="ajoutPanier"> Ajouter au panier </a>';
          // Gestion du panier
          document.getElementById('ajoutPanier').addEventListener('click', function(e) {
            e.preventDefault();
            if (localStorage.getItem("panier") == null) {
              let panier = {};
              panier.produits = [];
              localStorage.setItem('panier', JSON.stringify(panier));
              alert("Panier créé");
            } else {
              let panier = JSON.parse(localStorage.getItem("panier"));

              panier.produits.push(element);

              localStorage.setItem("panier", JSON.stringify(panier));
              alert("Ajouté au panier");
            }
          })

        }
      })
    })
}

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
      document.getElementById('panier').innerHTML += '<p><strong>' + element.name + '</strong> - ' + element.price + ' € - <a href="#" class="article' + i + '"> Retirer du panier </a> - Position' + i + ' </p>';
      document.querySelector('.article' + i + '').addEventListener('click', function(e) {
        e.preventDefault();
        console.log("ok");
        alert("ok");
      })
    i++;
  })
}


document.getElementById('panier').innerHTML += '<a href="commande.html">Passer la commande</a>';
