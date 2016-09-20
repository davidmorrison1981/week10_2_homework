var waterBottle = {
  volume: 0,
  fill: function(){return waterBottle.volume = 100},
  drink: function(){return waterBottle.volume-=10},
  empty: function(){

    return waterBottle.volume }
};


 

module.exports = waterBottle
// module.exports.fill = waterBottle.fill