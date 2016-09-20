var item1 ={
  description: "potato",
  price: 1.00,
  includedInBogof: "N"
}

var item2 ={
  description: "beans",
  price: 2.00,
  includedInBogof: "Y"
}

var item3 ={
  description: "tangerines",
  price: 4.00,
  includedInBogof: "Y"
}

var item4 ={
  description: "shampoo",
  price: 3.00,
  includedInBogof: "N"
}

var shoppingBasket={
  contents: [],
 
  empty: function(){
    this.contents = []
  },

  addItems: function(){
   this.contents.push(item1,item2,item3,item4)
    },

  removeItems: function(toRemove){
    if(this.contents.length > 0){
      // for (var i = 0; i < this.contents.length; i++) {
      //   var index = 0;
      //   if(toRemove !== this.contents[i]){
      //     index++
      //   }
      //   else
      //     {this.contents.splice(index, 1)
      //     }
      // };
      this.contents.pop()
    }
    else{ console.log("Your basket is empty! Fool!")}
    },

  totalPrice: function(){
    var totalNoBogof = 0,
    
    for(var i = 0; i < this.contents.length; i++){
      totalNoBogof =+ this.contents[i].price
    }
    return totalNoBogof,
  }





  };


module.exports = shoppingBasket;