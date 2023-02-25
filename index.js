
// Create a class that will be the blueprint for the player's ship used in the game. Ship will have (3) properties: hull, firepower, and accuracy. See assignment for property definitions.

class Ship {

    constructor(hull, firepower, accuracy, isAlive) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.isALive = true;
    }

    attack() {
        // declare random number
        const randomNum = Math.random()

        // successful attack = uss accuracy > random number between 0 and 1
        if (this.accuracy > randomNum) {
            
            // uss firepower deducts alien ship hull
            alien1.hull = alien1.hull - this.firepower

            console.log("Direct hit!");
            console.log(alien1.hull);
        }
        if (alien1.hull <= 0) {
            alien1.isALive = false
        }

        else {
            console.log("Attack missed");
        }
    }
}

// Create your spaceship the USS Assembly using "class" and give it the following three properties:
// hull - 20, firepower - 5, accuracy - 0.7.

const ussAssembly = new Ship(20, 5, 0.7)

console.log(ussAssembly);

// Create a class that will be the blueprint for the enemy aliens' ship. Alien ships will have the same (3) properties as the player's ship, but their properties will be determined randomly.

class Alien {

    constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = Math.round((Math.random() * 2) + 6) / 10;
        this.isALive = true;
    }
}

// Create the (6) alien ships. They should all have their own values randomly generated.

const alien1 = new Alien()
const alien2 = new Alien()
const alien3 = new Alien()
const alien4 = new Alien()
const alien5 = new Alien()
const alien6 = new Alien()

console.log(alien1);
console.log(alien2);
console.log(alien3);
console.log(alien4);
console.log(alien5);
console.log(alien6);

const alienArray = [alien1, alien2, alien3, alien4, alien5, alien6]

// console.log(Math.floor(Math.random() * 4) + 3);
// console.log(Math.floor(Math.random() * 3) + 2);
// console.log((Math.round((Math.random()*2)+6))/10);

ussAssembly.attack()