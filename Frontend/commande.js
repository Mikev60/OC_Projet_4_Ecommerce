// Création de l'objet contact à l'envoi du formulaire
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  //définition des regex pour contrôler les inputs avant envoi au serveur
  let emailSchema = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let autresChamps = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ0-9-]{2,}$/;

  if (emailSchema.test(document.querySelector("#email").value)) {
    if (autresChamps.test(document.querySelector("#nom").value) && autresChamps.test(document.querySelector("#prenom").value) && autresChamps.test(document.querySelector("#adresse").value) && autresChamps.test(document.querySelector("#ville").value)) {

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
      if (!panier || panier.produits.length === 0) {
        alert("Votre panier est vide, vous ne pouvez pas commander");
      } else {
        panier.produits.forEach(element => {
          products.push(element._id);
        });
        console.log(products);

        //POST de la requête, puis affichage de la commande / confirmation
        fetch('http://localhost:3000/api/cameras/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contact,
            products
          })
        }).then(function(response) {
          return response.json();
        }).then(function(resultat) {
          document.getElementById('confirmation').style.display = "block";
          document.getElementById('confirmation').innerHTML += '<p> Nous vous remercions pour votre commande, veuillez noter le numéro : ' + resultat.orderId + ' </p>';
          localStorage.clear();
        }).catch(error => res.status(500).json({ error }));
      }
    } else {
      alert('Un des champs contient des caractères non autorisés');
    }
  } else {
    alert("Votre addresse email comporte des erreurs");
  }
});
