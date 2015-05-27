function Team() {
  this.players = [];
};

Team.prototype.isValid = function () {
  if(this.players.length > 10 || this.players.length < 7) {
    return false;
  } 
  return true;
};

Team.prototype.addPlayer = function(player) {
  this.players.push(player);
};

function MalePlayer() {};

function FemalePlayer() {};