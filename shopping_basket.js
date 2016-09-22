// #Shopping Basket Lab
// We need to find the price of a shopping basket.
// A shopping basket can have multiple items.
// It should be able to add and remove items.


// 1. add items           [X]
// 2. remove items        [X]
// 3. calculate total     [ ]

// Discounts:

// - 10% discount for all shopping baskets over £20
// - If the customer has a valid discount card then they get an additional 5% off.

// Extension (hard!)
//   Add the ability to have buy one get one free items.


var shoppingBasket = {
  capacity: 20,
  contents: [],
  contentCount: function() { return (this.contents.length)},
  putItemInBasket: function(item){
  this.contents.push(item)
  },
  removeLastItemFromBasket: function(){ 
    return(this.contents.pop())
  },
  calculateTotalPrice: totalSum()
  };


var cheese = {
  name: "cheese",
  price: 0.70
};


var milk = {
  name: "milk",
  price: 0.60
};

var bread = {
  name: "bread",
  price: 0.90
};


 function totalSum() {
   var totalSum = 0;
   for (var i=0; i<contents.length;i++) {
     totalSum += contents[i].price;
   }
   return totalSum;
 }

// shoppingBasket.putItemInBasket(cheese);
// shoppingBasket.putItemInBasket(milk);
// shoppingBasket.putItemInBasket(bread);
// console.log(shoppingBasket);


module.exports = shoppingBasket;
// module.exports = cheese;
