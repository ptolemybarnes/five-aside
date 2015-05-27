function MalePlayer() {};

MalePlayer.prototype.isFemale = function() {
  return false;
}

function FemalePlayer() {};

FemalePlayer.prototype.isFemale = function() {
  return true;
}