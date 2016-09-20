var bottle = require('../water_bottle');
var assert = require('assert');

describe("Water Bottle", function(){

  it("should be empty", function(){
    assert.equal(0,bottle.volume)
  })

  it("should go to 100", function(){
    bottle.fill();
    assert.equal(100, bottle.volume)
  })

  it("should go down by 10 when drank", function(){
    bottle.fill();
    bottle.drink();
    assert.equal(90, bottle.volume)
  })

  it("should go down to 0", function(){
    bottle.fill();
    bottle.empty();
    assert.equal(0, bottle.volume)
  })

  it("should not go below down to 0", function(){
    bottle.fill();
    bottle.empty();
    assert.equal(0, bottle.volume)
  })

})