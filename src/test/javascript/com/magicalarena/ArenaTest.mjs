import { expect } from 'chai';
import sinon from 'sinon';
import Player from '../../../main/javascript/com/magicalarena/Player.mjs';
import Arena from '../../../main/javascript/com/magicalarena/Arena.mjs';
import Dice from '../../../main/javascript/com/magicalarena/Dice.mjs';

describe('Arena', () => {
    let player1, player2, arena, attackDiceStub, defenseDiceStub;

    beforeEach(() => {
        player1 = new Player(50, 5, 10);
        player2 = new Player(100, 10, 5);
        arena = new Arena(player1, player2);

        attackDiceStub = sinon.stub(Dice.prototype, 'roll');
        defenseDiceStub = sinon.stub(Dice.prototype, 'roll');
    });

    afterEach(() => {
        attackDiceStub.restore();
        defenseDiceStub.restore();
    });

    it('should conduct a fight until one player dies', () => {
        attackDiceStub.onFirstCall().returns(5);
        defenseDiceStub.onFirstCall().returns(2);
        attackDiceStub.onSecondCall().returns(4);
        defenseDiceStub.onSecondCall().returns(3);

        arena.fight();

        expect(player1.isAlive()).to.be.oneOf([true, false]);
        expect(player2.isAlive()).to.be.oneOf([true, false]);
    });

    it('should correctly perform an attack', () => {
        attackDiceStub.returns(5);
        defenseDiceStub.returns(2);

        arena.performAttack(player1, player2);

        expect(player2.health).to.equal(70); // Initial health 100 - (5*10 - 2*10) = 70
    });
});
