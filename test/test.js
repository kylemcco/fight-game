/* global describe, it */
/* jshint expr: true */

'use strict';

var assert = require('assert'),
    expect = require('chai').expect,
    Game   = require(process.cwd() + '/lib/game');


describe('Game', function () {
  describe('weaponcount', function () {
    it('should return number of weapon objects', function () {
      var game1  = new Game(4);
      expect(game1.weapons.length).to.equal(3);
    });
  });
  describe('playercount', function () {
    it('should return number of players', function () {
      var game2 = new Game(10);
      expect(game2.players.length).to.equal(10);
    });
  });
  describe('aliveplayers', function () {
    it('should return 1 alive player after game runs', function () {
      var game3 = new Game(10);
      game3.fightToTheDeath();
      expect(game3.alivePlayers.length).to.equal(1);
    });
  });
});
