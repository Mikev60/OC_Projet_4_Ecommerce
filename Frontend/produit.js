let url = window.location.search;
let searchUrl = new URLSearchParams(url);

if (searchUrl.has("produit")) {

  fetch('http://localhost:3000/api/cameras')
    .then(function(response) {
      return response.json();
    })
    .then(function(produit) {
      produit.forEach(element => {

        // Récupération url, conversion string et mise en forme pour recherche
        let urlProduit = String(searchUrl.getAll("produit"));
        urlProduit = urlProduit.replace("-", " ");

        //Affichage du produit
        if (urlProduit == element.name) {
          document.getElementById('content').innerHTML += '<a href="#" class="lienProduit">' + element.name + '</a>';
          document.getElementById('content').innerHTML += '<p>' + element.description + '</p>';
          document.getElementById('content').innerHTML += '<p>' + element.price + '</p>';
          document.getElementById('content').innerHTML += '<a href="" > Ajouter au panier </a>';
        }
      })
    })
}
