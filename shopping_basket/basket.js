var item1 ={
  description: "potato",
  price: 1.00,
  includedInBogof: "N"
}

var item2 ={
  description: "beans",
  price: 0.79,
  includedInBogof: "Y"
}

var item3 ={
  description: "tangerines",
  price: 1.50,
  includedInBogof: "Y"
}

var item4 ={
  description: "shampoo",
  price: 2.98,
  includedInBogof: "N"
}

var shoppingBasket={
  contents: [],
  
  addItems: function(item1,item2,item3,item4){
   this.contents.push(item1,item2,item3,item4)
    },

  removeItems: function(){
    this.contents.pop()
    }

  };


module.exports = shoppingBasket;