let products = []; // to be updated later by local storage
let subtotalPriceElement = document.getElementById("selected_subtotal"); // get DOM element for displaying subtotal 
let totalPriceElement = document.getElementById("selected_total"); // get DOM element for displaying total 

// Get the product template
const item_template = document.getElementById("product_template");
// Get the DOM element for entire cart section
const cartElement = document.getElementsByClassName("item_container")[0];


// Read cart items from local storage
window.addEventListener('load', function() {
    // get the savedCart in local storage if one exists
    products = JSON.parse(sessionStorage.getItem("savedProducts"));
    let cart = JSON.parse(sessionStorage.getItem("savedCart"));

    // update shopping cart state
    if (cart !== null)
    {
        // hide empty shopping cart 
        this.document.getElementsByClassName("empty_cart")[0].style.display = "none";
        // display filled shopping cart
        this.document.getElementsByClassName("filled_cart")[0].style.display = "revert";
        // display continue shopping button
        this.document.getElementsByClassName("continue_shop")[0].style.display = "revert";
        // display number of items
        this.document.getElementById("cart_num").innerHTML = "(" + cart.num + " items)";

    }
    else{
        // display empty shopping cart 
        this.document.getElementsByClassName("empty_cart")[0].style.display = "inherit";
        // hide filled shopping cart
        this.document.getElementsByClassName("filled_cart")[0].style.display = "none";
        // hide continue shopping button
        this.document.getElementsByClassName("continue_shop")[0].style.display = "none";
        
    }


    // update shopping cart items
    if(products !== null){
        //loop through cart items stored in local storage
        for(i = 0; i < products.length; i++){
            let color = products[i].color;
            let size = products[i].size;
            let qty = products[i].qty;

            addItemHTML(color,size,qty);

        }

        calculateSubtotal();
        calculateTotal();

    }


});



function addItemHTML(color, size, qty) {
	//make a copy of the item_template
	const productElement = item_template.cloneNode(true);
    productElement.id = "";

    //get the product image div element
    const imageElement = productElement.getElementsByClassName("item_img")[0];
    //get the product color elememt
    const colorElement = productElement.getElementsByClassName("item_color")[0]; 
    //get the product size elememt
    const sizeElement = productElement.getElementsByClassName("item_size")[0];
    //get the qty selection elememt
    const qtyElement = productElement.getElementsByClassName("item_qty")[0];
    

	//update img and color of the item_template according to user selection of color
	if(color === "Blackberry"){
		
		imageElement.getElementsByTagName("img")[0].setAttribute("src","img/cart_black.png");
        colorElement.getElementsByTagName("span")[0].innerHTML = "Blackberry";
	}

	if(color === "Fire Orange"){

		imageElement.getElementsByTagName("img")[0].setAttribute("src","img/cart_orange.png");
        colorElement.getElementsByTagName("span")[0].innerHTML = "Fire Orange";
	}

	if(color === "Strawberry"){

		imageElement.getElementsByTagName("img")[0].setAttribute("src","img/cart_pink.png");
        colorElement.getElementsByTagName("span")[0].innerHTML = "Strawberry";
	}

	//update size of the item_template according to user selection of size
    sizeElement.getElementsByTagName("span")[0].innerHTML = size;


	//update quantity of the item_template according to user selection of qty
    qtyElement.getElementsByTagName("input")[0].value = qty;


    cartElement.appendChild(productElement);

}


// calculate the current subtotal price of items in the cart and update the page
function calculateSubtotal() {
	let total = 0;
    for (element of products) {
        total += (element.price * element.qty);
    }

    subtotalPriceElement.innerHTML = "$" + total.toFixed(2);

}

// calculate the current total price of items in the cart and update the page
function calculateTotal() {
	let shipping = 8;
    let subtotal = 0;

    for (element of products) {
        subtotal += (element.price * element.qty);
    }

	let total = subtotal + shipping;

	totalPriceElement.innerHTML = "$" + total.toFixed(2);
    
}


// remove item from the products list when user clicks on "Remove"
function removeCartItem(remove_button) {
    if(products !== null){
        
        //get the parent item Node that the remove button belongs to 
        let subItemNode = remove_button.parentNode;
        //console.log(subItemNode);
        subItemNode = subItemNode.parentNode;
        //console.log(subItemNode);
        let itemNode = subItemNode.parentNode;
        //console.log(itemNode);
        
        //get the parent Node of all cart items
        let itemParent = document.getElementsByClassName("item_container")[0];

        //obtain the index of the item to be removed
        let itemIndex = Array.prototype.indexOf.call(itemParent.children, itemNode);
        //console.log(itemIndex);
        
        //convert the index to its corresponding index number in the product array
        itemIndex = itemIndex-2;
        //console.log(itemIndex);

        //update the number of items in shopping cart
        let cart = JSON.parse(sessionStorage.getItem("savedCart"));
        let item_qty = products[itemIndex].qty;
        let new_qty = cart.num - item_qty;
        let new_cart = {num : new_qty};

        //update the storage
        sessionStorage.setItem("savedCart", JSON.stringify(new_cart));

        //update the page with new cart quantity
        document.getElementById("num_items").innerHTML = " (" + new_qty + ")";
        document.getElementById("cart_num").innerHTML = "(" + new_qty + " items)";


        //remove the itemNode from the HTML document
        itemParent.removeChild(itemNode);

        //delete the item from the product array
        products.splice(itemIndex,1);

        //check if the shopping cart becomes empty
        if(products.length===0){
            // remove product array from local storage -> null again
            sessionStorage.removeItem("savedProducts");
            sessionStorage.removeItem("savedCart");
            // display empty shopping cart 
            document.getElementsByClassName("empty_cart")[0].style.display = "revert";
            // hide filled shopping cart
            document.getElementsByClassName("filled_cart")[0].style.display = "none";
            // hide continue shopping button
            document.getElementsByClassName("continue_shop")[0].style.display = "none";
            // reset the cart to the empty state
            document.getElementById("num_items").innerHTML = "";
        
        }
        else {
            //save the updated product list in local storage
            sessionStorage.setItem("savedProducts", JSON.stringify(products));

            //update the price
            calculateSubtotal();
            calculateTotal();
        }



    }

}

// updates shopping cart qty when user adjusts item qty on the shopping cart page
function addItemQty(spin_button) {
    
    //get the parent item Node that the spin button belongs to 
    let subItemNode = spin_button.parentNode;
    //console.log(subItemNode);
    subItemNode = subItemNode.parentNode;
    //console.log(subItemNode);
    let itemNode = subItemNode.parentNode;
    //console.log(itemNode);
    
    //get the parent Node of all cart items
    let itemParent = document.getElementsByClassName("item_container")[0];

    //obtain the index of the item to be removed
    let itemIndex = Array.prototype.indexOf.call(itemParent.children, itemNode);
    //console.log(itemIndex);

    //convert the index to its corresponding index number in the product array
    itemIndex = itemIndex-2;

    //update the number of items in shopping cart
    let cart = JSON.parse(sessionStorage.getItem("savedCart"));
    let new_qty = cart.num + (spin_button.value - products[itemIndex].qty);
    let new_cart = {num : new_qty};

    //update the item qty
    products[itemIndex].qty = spin_button.value;


    //update the local storage
    sessionStorage.setItem("savedCart", JSON.stringify(new_cart));
    sessionStorage.setItem("savedProducts", JSON.stringify(products));

    //reload the page to update html
    location.reload();


}

