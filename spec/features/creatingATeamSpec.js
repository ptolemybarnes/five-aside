describe('A Captain', function() {
  var team;

  beforeEach(function() {
    team = new Team();
  });

  it('knows when a team is valid', function() {
    addMalePlayers(team, 7);
    addFemalePlayers(team, 3);

    expect(team.isValid()).toBe(true);
  });

  it('knows when a team is too large', function() {
    addMalePlayers(team, 10);
    addFemalePlayers(team, 3);

    expect(team.isValid()).toBe(false);
  });

  it("knows a team is too small", function() {
     addMalePlayers(team, 3);
     addFemalePlayers(team, 3);

     expect(team.isValid()).toBe(false);
  });

  function addMalePlayers(team, quantity) {
    for(var i = 0; i < quantity; i ++) {
      team.addPlayer(new MalePlayer());
    }
  }

  function addFemalePlayers(team, quantity) {
    for(var i = 0; i < quantity; i ++) {
      team.addPlayer(new FemalePlayer());
    }
  }
});