class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
         //Check if the target is a unit card
        if (target instanceof Unit) {
            //reduce target resilience
            target.resilience -= this.power;
        } else {
            //Error
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {

        //Check if the target is a unit card
        if (target instanceof Unit) {
            if (this.stat == "Resilience") {
                target.resilience += this.magnitude;
            }

            if (this.stat == "Power") {
                target.power += this.magnitude;
            }
            console.log(`The ${target.name} has played ${this.name}` )
        } else {
            //Error
            throw new Error("Target must be a unit!");
        }
    }
}


//Units
const ninja_red_belt = new Unit("Ninja Red Belt", 3, 3, 4);
const ninja_black_belt = new Unit("Ninja Black Belt", 4, 5, 4);

//Effects
const hard_algorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "Resilience" , +3);
const promise_rejection_not_handled = new Effect("Promise rejection not handled", 1, "Reducir la resistencia del objetivo en 2", "Resilience" , -2);
const pair_programming = new Effect("Pair Programming", 3, "Incrementar el poder del objetivo en 2", "Power" , +2);


//Play game

console.group("Start Game");
console.log(ninja_red_belt);
console.log(ninja_black_belt);
console.groupEnd();

//Turno 1
hard_algorithm.play(ninja_red_belt);

//Turno 2
promise_rejection_not_handled.play(ninja_red_belt);

//Turno 3
pair_programming.play(ninja_red_belt);
ninja_red_belt.attack(ninja_black_belt);

console.group("End Game");
console.log(ninja_red_belt);
console.log(ninja_black_belt);
console.groupEnd();