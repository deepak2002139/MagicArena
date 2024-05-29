const Player = require('./Player');
const Arena = require('./Arena');

const player1 = new Player(50, 5, 10);
const player2 = new Player(100, 10, 5);

const arena = new Arena(player1, player2);
arena.fight();
