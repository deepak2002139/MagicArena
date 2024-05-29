class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    reduceHealth(amount) {
        this.health = Math.max(0, this.health - amount);
    }

    isAlive() {
        return this.health > 0;
    }
}

module.exports = Player;
