describe('A Captain', function() {

  it('knows when a team is valid', function() {
    var team = new Team();
    for(var i = 0; i < 7; i ++) {
      team.addPlayer(new MalePlayer());
    }
    for(var i = 0; i < 3; i ++) {
      team.addPlayer(new FemalePlayer());
    }

    expect(team.isValid()).toBe(true);
  });

  it('knows when a team is too large', function() {
    var team = new Team();
    for(var i = 0; i < 10; i ++) {
      team.addPlayer(new MalePlayer());
    }
    for(var i = 0; i < 3; i ++) {
      team.addPlayer(new FemalePlayer());
    }

    expect(team.isValid()).toBe(false);
  });
});