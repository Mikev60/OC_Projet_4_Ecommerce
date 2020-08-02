let i = 0;

fetch('http://localhost:3000/api/cameras')
.then(response => {
  return response.json();
})
.then(cameras => {
  cameras.forEach(element => {

    //Conversion de l'url pour une URL plus lisible (seo ?)
    if(i%2 == 0) {
      document.getElementById('content').innerHTML += '<div class="produit1"><h2>'+element.name+'</h2> <img width=100 height=100 src="'+element.imageUrl+'"/> <p>'+element.price+' €</p> <br> <a href="produit.html?produit='+element.name+'" class="lienProduit">Voir la fiche produit</a></div>';
    }
    else {
      document.getElementById('content').innerHTML += '<div class="produit2"><h2>'+element.name+'</h2> <img width=100 height=100 src="'+element.imageUrl+'"/> <p>'+element.price+' €</p> <br> <a href="produit.html?produit='+element.name+'" class="lienProduit">Voir la fiche produit</a></div>';

    }
    i++;
  })
})
