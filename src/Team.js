function Team() {
  this.players = new PlayerCollection();
  this.maxPlayers = 10;
  this.minimumPlayers = 7;
};

Team.prototype.isValid = function () {
  if(this.validatePlayerCount()) {
    return false;
  }
  if(this.players.countFemalePlayers() < 2) {
    return false;
  };
  return true;
};

Team.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Team.prototype.validatePlayerCount = function() {
  return (this.players.length() > this.maxPlayers || this.players.length() < this.minimumPlayers);
};

function MalePlayer() {};

MalePlayer.prototype.isFemale = function() {
  return false;
}

function FemalePlayer() {};

FemalePlayer.prototype.isFemale = function() {
  return true;
}

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




