var basket = require('../basket.js');
var assert = require('assert');

describe("shoppingBasket", function(){

  beforeEach(function(){
    basket.empty();
    console.log(basket.contents);
  });

  it("should be empty", function(){
    console.log(basket.contents);
    assert.equal(0, basket.contents.length);
  });

  it("should add items", function(){
    basket.addItems(),
    console.log(basket.contents);
    assert.notEqual(0, basket.contents.length)
  });

  it("should object to remove items when basket is empty", function(){
      toRemove = "potato",
      basket.removeItems(toRemove);
      assert.deepEqual([], basket.contents)
  });

  it("should remove items from basket", function(){
      basket.addItems(),
      console.log(basket.contents);
      toRemove = '{description: "potato", price: 1.00, includedInBogof: "N"}',
      basket.removeItems(),
      assert.equal(3, basket.contents.length)
  });
})
