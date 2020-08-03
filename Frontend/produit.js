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
          document.getElementById('imageProduit').innerHTML += '<img src="' + element.imageUrl + '" />';
          document.getElementById('descriptionProduit').innerHTML += '<h2>' + element.name + '</h2>';
          document.getElementById('descriptionProduit').innerHTML += '<p>' + element.description + '</p>';
          document.getElementById('descriptionProduit').innerHTML += '<p>' + element.price + ' €</p>';
          document.getElementById('descriptionProduit').innerHTML += '<p><strong>Options de personnalisation :</strong></p>';
          document.getElementById('descriptionProduit').innerHTML += '<select name="personnalisation" id="personnalisation"></select>';
          for (var i = 0; i < element.lenses.length; i++) {
            document.getElementById("personnalisation").innerHTML += '<option value="test"> ' + element.lenses[i] + ' </option> ';
          }
          document.getElementById('descriptionProduit').innerHTML += '<a href="" id="ajoutPanier"> Ajouter au panier </a>';
          // Gestion du panier - Ajout des articles
          document.getElementById('ajoutPanier').addEventListener('click', function(e) {
            e.preventDefault();
            if (localStorage.getItem("panier") == null) {
              let panier = {};
              panier.produits = [];
              panier.produits.push(element);
              localStorage.setItem('panier', JSON.stringify(panier));
              alert("Ajouté au panier");
              majPanier(panier);
            } else {
              let panier = JSON.parse(localStorage.getItem("panier"));

              panier.produits.push(element);

              localStorage.setItem("panier", JSON.stringify(panier));
              alert("Ajouté au panier");
              document.getElementById('deroulerPanier').innerHTML = panier.produits.length;
              majPanier(panier);
            }
          })

        }
      })
    })
}
