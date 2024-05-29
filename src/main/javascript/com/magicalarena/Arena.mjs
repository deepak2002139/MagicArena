const Dice = require('./Dice');

class Arena {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.attackDice = new Dice();
        this.defenseDice = new Dice();
    }

    fight() {
        let attacker = (this.player1.health < this.player2.health) ? this.player1 : this.player2;
        let defender = (attacker === this.player1) ? this.player2 : this.player1;

        while (this.player1.isAlive() && this.player2.isAlive()) {
            this.performAttack(attacker, defender);

            // Swap roles
            [attacker, defender] = [defender, attacker];
        }

        console.log(`Fight Over: ${this.player1.isAlive() ? 'Player 1 Wins!' : 'Player 2 Wins!'}`);
    }

    performAttack(attacker, defender) {
        const attackRoll = this.attackDice.roll();
        const defenseRoll = this.defenseDice.roll();

        const attackDamage = attacker.attack * attackRoll;
        const defenseStrength = defender.strength * defenseRoll;

        const damageDealt = Math.max(0, attackDamage - defenseStrength);
        defender.reduceHealth(damageDealt);

        console.log(`Attacker dealt ${damageDealt} damage. Defender's health is now ${defender.health}`);
    }
}

module.exports = Arena;
