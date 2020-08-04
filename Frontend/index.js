let j = 0;
//Récupération des datas à afficher
fetch('http://localhost:3000/api/cameras')
  .then(response => {
    return response.json();
  })
  .then(cameras => {
    cameras.forEach(element => {

      //Affichage des produits selon deux classes différentes pour alterner les couleurs
      if (j % 2 == 0) {
        document.getElementById('content').innerHTML += '<div class="produit1"><div class="imageProduit"><img src="' + element.imageUrl + '"/></div><div class="descriptionProduit"> <h2>' + element.name + '</h2> <p>' + element.description + ' </p> <p>' + element.price + ' €</p> <br> <a href="produit.html?produit=' + element._id + '" class="lienProduit">Voir la fiche produit</a></div></div>';
      } else {
        document.getElementById('content').innerHTML += '<div class="produit2"><div class="imageProduit"><img src="' + element.imageUrl + '"/></div><div class="descriptionProduit"> <h2>' + element.name + '</h2> <p>' + element.description + ' </p><p>' + element.price + ' €</p> <br> <a href="produit.html?produit=' + element._id + '" class="lienProduit">Voir la fiche produit</a></div></div>';

      }
      j++;
    })
  })
