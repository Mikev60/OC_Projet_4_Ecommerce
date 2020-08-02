let i = 0;
let panier = localStorage.getItem("panier");
panier = JSON.parse(panier);
console.log(panier); // A supprimer
panier.produits.forEach(element => {
  document.getElementById('contenuPanier').innerHTML += '<p><strong>' + element.name + '</strong> - ' + element.price + ' € </p>';
  document.getElementById('deroulerPanier').innerHTML = panier.produits.length;
  i++;
})
