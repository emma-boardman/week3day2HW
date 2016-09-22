var basket = require( '../shopping_basket.js' );
var assert = require( 'assert' );

// 1. Items can be put in the shopping basket




// 1. basket should start empty

describe( "Shopping Basket", function(){
  it( "should be empty", function(){
    assert.equal( 0, basket.contentCount() )
  })
})

// 2. can add item to basket

describe( "Shopping Basket", function(){
  it( "should be able to receive items", function(){ 
    basket.putItemInBasket(basket.cheese);
    assert.equal( 1, basket.contentCount() )
  
  })
})


// 3. can remove item from basket

describe( "Shopping Basket", function(){
  it( "should be able to have items removed", function(){
    // basket.putItemInBasket(basket.cheese);
    basket.removeLastItemFromBasket()
    assert.equal( 0, basket.contentCount())

  })
})


// 4. can calculate total

describe( "Shopping Basket", function(){
 it( "can calculate total of items in basket", function(){
  basket.putItemInBasket(basket.cheese);
  basket.putItemInBasket(basket.milk);
  basket.putItemInBasket(basket.bread);
  assert.equal( 2.3, basket.calculateTotalPrice())
 }

  )

})