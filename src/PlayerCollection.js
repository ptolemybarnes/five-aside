function PlayerCollection() {
  this.players = []
};

PlayerCollection.prototype.push = function(player) {
  this.players.push(player);
}

PlayerCollection.prototype.length = function() {
  return this.players.length;
}

PlayerCollection.prototype.countFemalePlayers = function() {
  var femaleCount = 0;

  for(var i = 0; i < this.length(); i += 1) {
    if(this.players[i].isFemale()) {
      femaleCount +=1;
    }
  }
  return femaleCount;
}