let order = JSON.parse(localStorage.getItem("order"));

document.getElementById('confirmation').style.display = "block";
document.getElementById('confirmation').innerHTML += '<p> Nous vous remercions pour votre commande d\'un total de '+order.totalAmount+' €, veuillez noter le numéro : ' + order.orderId + ' </p>';
localStorage.clear();
