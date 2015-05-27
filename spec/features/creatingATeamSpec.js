describe('A Captain can create a team', function() {

  it('A Captain can create a valid team of players', function() {
    var team = new Team();
    for(var i = 0; i < 7; i ++) {
      team.addPlayer(new MalePlayer());
    }
    for(var i = 0; i < 3; i ++) {
      team.addPlayer(new FemalePlayer());
    }

    expect(team.isValid()).toBe(true);
  });
});