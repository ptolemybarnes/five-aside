describe('A Captain', function() {

  it('knows when a team is valid', function() {
    var team = new Team();
    
    addMalePlayers(team, 7);
    addFemalePlayers(team, 3);

    expect(team.isValid()).toBe(true);
  });

  it('knows when a team is too large', function() {
    var team = new Team();

    addMalePlayers(team, 10);
    addFemalePlayers(team, 3);

    expect(team.isValid()).toBe(false);
  });

  function addMalePlayers(team, quantity) {
    for(var i = 0; i < quantity; i ++) {
      team.addPlayer(new MalePlayer());
    }
  }

  function addFemalePlayers(team, quantity) {
    for(var i = 0; i < 3; i ++) {
      team.addPlayer(new FemalePlayer());
    }
  }
});