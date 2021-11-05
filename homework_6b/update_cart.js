/**
This function sets up the shopping cart when the web page loads. 
*/
window.onload = function() {
  
  // get the savedCart in local storage if one exists
  let cart = JSON.parse(sessionStorage.getItem("savedCart"));

  // if the saved cart exists in local storage
  if (cart !== null) 
  {
    // update the page based on the cart properties
  	document.getElementById("num_items").innerHTML = " (" + cart.num + ")";
  } 
  else {
    // reset the cart to the empty state
    document.getElementById("num_items").innerHTML = "";
  }


}





  

  