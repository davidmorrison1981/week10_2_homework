var basket = require('../basket.js');
var assert = require('assert');

describe("shoppingBasket", function(){

  beforeEach( function(){
    basket.empty
  });

  it("should be empty", function(){
    assert.equal("", basket.contents)
  });

  it("should add items", function(){
    basket.addItems(),
    assert.notEqual("", basket.contents)
  });

  it("should remove items", function(){
       basket.removeItems(),
    assert.equal("potato, 1.00, N", basket.contents)
  });
})