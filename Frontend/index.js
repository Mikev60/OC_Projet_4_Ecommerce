fetch('http://localhost:3000/api/cameras')
.then(response => {
  return response.json();
})
.then(cameras => {
  cameras.forEach(element => {
    
    //Conversion de l'url pour une URL plus lisible (seo ?)
    let urlProduit = element.name.replace(' ','-');
    document.getElementById('content').innerHTML += '<a href="produit.html?produit='+urlProduit+'" class="lienProduit">'+element.name+'</a>';
    document.getElementById('content').innerHTML += '<p>'+element.description+'</p>';
    document.getElementById('content').innerHTML += '<p>'+element.price+'</p>';
    document.getElementById('content').innerHTML += '<a href="" > Ajouter au panier </a>';
  })
})
