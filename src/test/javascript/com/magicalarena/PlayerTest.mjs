import { expect } from 'chai';
import Player from '../../../main/javascript/com/magicalarena/Player.mjs';

describe('Player', () => {
    it('should initialize correctly', () => {
        const player = new Player(50, 5, 10);
        expect(player.health).to.equal(50);
        expect(player.strength).to.equal(5);
        expect(player.attack).to.equal(10);
    });

    it('should reduce health correctly', () => {
        const player = new Player(50, 5, 10);
        player.reduceHealth(20);
        expect(player.health).to.equal(30);
        player.reduceHealth(50);
        expect(player.health).to.equal(0);
    });

    it('should correctly report if alive', () => {
        const player = new Player(50, 5, 10);
        expect(player.isAlive()).to.be.true;
        player.reduceHealth(50);
        expect(player.isAlive()).to.be.false;
    });
});

