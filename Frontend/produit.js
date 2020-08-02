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
          document.getElementById('produit').innerHTML += '<a href="#" class="lienProduit">' + element.name + '</a>';
          document.getElementById('produit').innerHTML += '<p>' + element.description + '</p>';
          document.getElementById('produit').innerHTML += '<p>' + element.price + '</p>';
          document.getElementById('produit').innerHTML += '<a href="" id="ajoutPanier"> Ajouter au panier </a>';
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
