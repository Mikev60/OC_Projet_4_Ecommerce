let j = 0;

fetch('http://localhost:3000/api/cameras')
.then(response => {
  return response.json();
})
.then(cameras => {
  cameras.forEach(element => {

    //Conversion de l'url pour une URL plus lisible (seo ?)
    if(j%2 == 0) {
      document.getElementById('content').innerHTML += '<div class="produit1"><div class="imageProduit"><img src="'+element.imageUrl+'"/></div><div class="descriptionProduit"> <h2>'+element.name+'</h2> <p>'+element.description+' </p> <p>'+element.price+' €</p> <br> <a href="produit.html?produit='+element.name+'" class="lienProduit">Voir la fiche produit</a></div></div>';
    }
    else {
      document.getElementById('content').innerHTML += '<div class="produit2"><div class="imageProduit"><img src="'+element.imageUrl+'"/></div><div class="descriptionProduit"> <h2>'+element.name+'</h2> <p>'+element.description+' </p><p>'+element.price+' €</p> <br> <a href="produit.html?produit='+element.name+'" class="lienProduit">Voir la fiche produit</a></div></div>';

    }
    j++;
  })
})
