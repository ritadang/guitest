/*
// set up the product details page when the page loads
window.onload = function() {
  //hide the popup message box
  const message_box = document.getElementsByClassName("cart_message")[0];
  message_box.hide();
};
*/

// Declare DOM elements
const size = document.getElementById("size_selection"); //selected size
const color = document.getElementById("color_selection"); //selected color
const productImg = document.getElementsByClassName("product_img")[0]; //product image 


const size_selections = document.getElementById("select_size"); //get the select element for size
const color_selections = document.getElementById("select_color"); //get the select element for color


// Add event listeners to update product details page according to size selection
size_selections.addEventListener("change", function(){
	
	// when size "Tiny" is selected
	if(this.value == 1){
	  	size.innerHTML = "Tiny";
	  }

	// when size "Small" is selected
	if(this.value == 2){
	  	size.innerHTML = "Small";
	  }

	// when size "Medium" is selected
	if(this.value == 3){
	  	size.innerHTML = "Medium";
	  }


	// when size "Large" is selected
	if(this.value == 4){
	  	size.innerHTML = "Large";
	  }


	// when nothing is selected
	if(this.value == 0){
	  	size.innerHTML = "Please select";
	  }

});



// Add event listeners to update product details page according to color selection
color_selections.addEventListener("change", function(){
	
	// when color "Blackberry" is selected
	if(this.value == 0){
	  	color.innerHTML = "Blackberry";
	  	productImg.getElementsByTagName("img")[0].setAttribute("src","img/product_detail_black.png");
	  }

	// when color "Fire Orange" is selected
	if(this.value == 1){
	  	color.innerHTML = "Fire Orange";
	  	productImg.getElementsByTagName("img")[0].setAttribute("src","img/product_detail_orange.png");
	  }

	// when color "Strawberry" is selected
	if(this.value == 2){
	  	color.innerHTML = "Strawberry";
	  	productImg.getElementsByTagName("img")[0].setAttribute("src","img/product_detail_pink.png");
	  }


});

// Update shopping cart icon and display message
function update_cart() {
	
	display_message();
	update_cart_icon();
}

function display_message() {

	// Declare DOM elements
	const message_box = document.getElementsByClassName("cart_message")[0];
	const close_button = document.getElementsByClassName("popupCloseButton")[0];

	message_box.style.display = "block"; // display popup message when "Add to Cart" button is clicked

	message_box.addEventListener("click", function(){

		//close the message box when user clicks on the message box
		message_box.style.display = "none";

	});

	close_button.addEventListener("click", function(){

		//close the message box when user clicks on the exit button
		message_box.style.display = "none";

	});

}


function update_cart_icon() {

	// check the value of the quantity selection button
    let qty = document.getElementById("spin_button").value;
    //console.log(qty);
    qty = parseInt(qty);
    //console.log(typeof(qty));

    // get the savedCart in local storage if one exists
    let cart = JSON.parse(sessionStorage.getItem("savedCart"));
    
    //check if any items has been added previously
    if (cart !== null){

      // update the total number of items
      cart.num = cart.num + qty;
      //console.log(cart.num);
      //console.log(typeof(cart.num));

      // update the page based on the cart properties
      document.getElementById("num_items").innerHTML = "(" + cart.num + ")";

      // clear the old cart item
      sessionStorage.removeItem("savedCart");

      // save the updated cart item
      let cart_item = {num : cart.num}
      sessionStorage.setItem("savedCart", JSON.stringify(cart_item));

    }
    else {
      // create a new cart item
      let cart_item = {num : qty};
      // save the cart state to the local storage
      sessionStorage.setItem("savedCart", JSON.stringify(cart_item));

      // update the page based on the cart properties
      document.getElementById("num_items").innerHTML = "(" + cart_item.num + ")";
    }

}