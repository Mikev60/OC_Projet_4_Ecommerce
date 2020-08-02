
// Création de l'objet contact à l'envoi du formulaire
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  let contact = {
    lastName: document.querySelector("#nom").value,
    firstName: document.querySelector("#prenom").value,
    address: document.querySelector("#adresse").value,
    city: document.querySelector("#ville").value,
    email: document.querySelector("#email").value
  }

  //Création du tableau de produits
  let panier = localStorage.getItem("panier");
  panier = JSON.parse(panier);
  let products = [];
  panier.produits.forEach(element => {
    products.push(element._id);
  });
  console.log(products);

  /*Envoi des données à l'API
  let requete = new XMLHttpRequest();
  requete.open("POST", "http://localhost:3000/api/cameras/order");
  requete.setRequestHeader("Content-Type", "application/json");*/

/* AJAX gestion erreur
  requete.onreadystatechange = function() {
    if(requete.readyState === 4 && requete.status === 200) {
      alert(requete.responseText);
      console.log(requete.responseText);
      let reponse = JSON.parse(requete.responseText);
      alert(reponse.orderId);
      console.log(reponse.orderId);
    }
  } */

/* AJAX pur
      requete.addEventListener("loadend", function() {
      let reponse = JSON.parse(requete.responseText);
      alert(reponse.orderId);
      console.log(reponse.orderId);
  })

  let envoi = JSON.stringify({contact,products});
  requete.send(envoi);*/

  fetch('http://localhost:3000/api/cameras/order', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({contact,products})
  }).then(function(response) {
    return response.json();
  }).then(function(resultat) {
    alert(resultat.orderId);
    document.getElementById('confirmation').style.display = "block";
    document.getElementById('confirmation').innerHTML += '<p> Nous vous remercions pour votre commande, veuillez noter le numéro : ' + resultat.orderId + ' </p>';
    localStorage.clear();
  })

});
