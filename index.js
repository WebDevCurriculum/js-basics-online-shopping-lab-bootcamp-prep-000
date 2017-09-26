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
var itemObject = {};
var itemPrice = Math.floor(Math.random() * 100) + 1;
itemObject[itemName] = itemPrice
 /*itemPrice should be randomly generated integer between 1 and 100 */
 /*create one key value pair - itemName:itemPrice */
 /* add items to cart */
    cart.push(itemObject);
    console.log(`${itemName} has been added to your cart.`);
    return cart;
 }

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
