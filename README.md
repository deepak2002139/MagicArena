<!-- Swiggy project for hiring -->
# # Magical Arena

Magical Arena is a simple simulation game where two players fight in an arena. Each player has health, strength, and attack attributes. Players attack in turns, and the damage dealt is determined by rolling dice. The game ends when one player's health reaches zero.

## Project Files
# Main Code

Arena.js: Defines the Arena class where the fight simulation takes place.
Player.js: Defines the Player class, which represents a player in the arena.
Dice.js: Defines the Dice class, used to simulate dice rolls.
Game.js: Entry point to start the game simulation.

## Tests
ArenaTest.js: Unit tests for the Arena class.
PlayerTest.js: Unit tests for the Player class.

## Game Rules

 Each player has three attributes: health, strength, and attack.
 Players attack in turns. The player with lower health starts the fight.
 Attacker rolls an attack dice and defender rolls a defense dice.
 Damage dealt is calculated as attack value * attack dice roll.
 Damage defended is calculated as strength value * defense dice roll.
 Excess damage reduces the defender's health.
 The game ends when one player's health reaches zero.
