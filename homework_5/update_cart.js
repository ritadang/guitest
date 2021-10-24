// Object Constructor
function Product(color, size) {
  this.name = "Waterproof Harness - Dog";
  this.color = color;
  this.size = size;
}

let hasSavedCart = false; // the default shopping cart is empty

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
  	document.getElementById("num_items").innerHTML = "(" + cart.num + ")";
    // update boolean value
    hasSavedCart = true;
  } 

  // update shopping cart state
  if (hasSavedCart === true)
  {
    // hide empty shopping cart 
    document.getElementsByClassName("empty_cart")[0].style.display = "none";
    // display filled shopping cart
    document.getElementsByClassName("filled_cart")[0].style.display = "revert";
    // display continue shopping button
    document.getElementsByClassName("continue_shop")[0].style.display = "revert";

  }

}





  

  