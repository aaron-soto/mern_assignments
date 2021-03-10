//  two units
// Units and Effects

class Card {
	constructor(name, cost) {
		this.name = name;
		this.cost = cost;
	}
}

class Unit extends Card {
	constructor(name, cost, power, resilience) {
		super(name, cost);
		this.power = power;
		this.resilience = resilience;
	}
	attack(target) {
		target.resilience -= this.power;
		console.log(`Attacking ${target.name}`);
	}
}

class Effect extends Card {
	constructor(name, cost, stat, magnitude) {
		super(name, cost);
		this.stat = stat;
		this.magnitude = magnitude;
		if (this.magnitude < 0) {
			this.text = `Reduce target's ${this.stat} by ${Math.abs(this.magnitude)}`;
		} else {
			this.text = `Increase target's ${this.stat} by ${Math.abs(
				this.magnitude
			)}`;
		}
	}

	play(target) {
		if (target instanceof Unit) {
			target[this.stat] += this.magnitude;
		} else {
			throw new Error("Target must be a unit!");
		}
	}
}

redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", +3);
hardAlgorithm.play(redBeltNinja);

blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
unhandledPromiseRejection = new Effect(
	"Unhandled Promise Rejection",
	1,
	"resilience",
	-2
);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming = new Effect("Pair Programming", 3, "power", +2);
pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);
