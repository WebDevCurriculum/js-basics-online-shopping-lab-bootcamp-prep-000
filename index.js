var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 /* the item that will be passed through is a string*/
 /* create a new object */
var itemObject = {};
/*itemPrice should be randomly generated integer between 1 and 100 */
var itemPrice = Math.floor(Math.random() * 100) + 1;
/*create one key value pair - itemName:itemPrice */
itemObject[itemName] = itemPrice;
 /* add items to cart */
    cart.push(itemObject);
    console.log(`${itemName} has been added to your cart.`);
    return cart;
}

function viewCart() {
  // write your code here
/*price that is in existing cart */
/* [{lemons:54}] */
/* you don't want to "push" anything to the cart you want to display the contents of the existing cart */
/*  if(cart.length == 0) {
  console.log("Your shopping cart is empty."); */

for(var i = 0; i < cart.length; i++) {
  var item = cart[i];
  var itemName = Object.keys(item)[i];
  var itemPrice = item[itemName];

   if(cart.length == 1){
  console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
}
  else if(cart.length == 2) {
      console.log(`In your cart, you have ${itemName} at $${itemPrice} and ${itemName} at ${itemPrice}.`);
  }
}
}



/*  var string = "In your cart, you have";
  var subString1 = `${itemName} at $${itemPrice}.`;
  var subString2 = "and";
*/

   /*if(cart.length == 1){

      console.log(`In your cart, you have ${itemName} at $${itemPrice}.`)}
    else if(cart.length == 2) {
        console.log(`In your cart, you have ${itemName} at $${itemPrice} and ${itemName} at ${itemPrice}.`)
      }
    }
}
*/



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
