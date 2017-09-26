var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 /* the item that will be passed through is a string*/
var itemName;
 /*itemPrice should be randomly generated integer between 1 and 100 */
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 /*create one key value pair - itemName:itemPrice */
 
 var itemInfo = [{}];
  itemInfo["item"] = "itemPrice";
  /*for(var i = 0; i < itemInfo.length; i++) {
    itemInfo.push(item); */
  }
    /* item is a string. How will you add the string to the object */

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
