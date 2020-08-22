// Création de l'objet contact à l'envoi du formulaire
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  //définition des regex pour contrôler les inputs avant envoi au serveur
  let emailSchema = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let autresChamps = /^[a-z A-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ0-9-]{2,}$/;

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
      let sommePanier = 0;
      if (!panier || panier.produits.length === 0) {
        alert("Votre panier est vide, vous ne pouvez pas commander");
      } else {
        panier.produits.forEach(element => {
          products.push(element._id);
          sommePanier += element.price; 
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
          let order = {
            orderId: resultat.orderId,
            totalAmount: sommePanier
          }
          console.log(order.orderId);
          console.log(order.totalAmount);
          let orderStorage = localStorage.setItem('order', JSON.stringify(order));
          document.location.href="confirmation.html"
        }).catch(error => res.status(500).json({ error }));
      }
    } else {
      alert('Un des champs contient des caractères non autorisés');
    }
  } else {
    alert("Votre addresse email comporte des erreurs");
  }
});
