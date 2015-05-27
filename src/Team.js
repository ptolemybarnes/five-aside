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




