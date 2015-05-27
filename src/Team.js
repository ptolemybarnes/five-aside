function Team() {
  this.players = [];
};

Team.prototype.isValid = function () {
  if(this.players.length > 10 || this.players.length < 7) {
    return false;
  }
  var femaleCount = 0,
      maleCount = 0;
  for(var i = 0; i < this.players.length; i += 1) {
    if(this.players[i].isFemale()) {
      femaleCount +=1;
    }
  } 
  if(femaleCount < 2) {
    return false;
  }
  return true;

};

Team.prototype.addPlayer = function(player) {
  this.players.push(player);
};

function MalePlayer() {};

MalePlayer.prototype.isFemale = function() {
  return false;
}

function FemalePlayer() {};

FemalePlayer.prototype.isFemale = function() {
  return true;
}