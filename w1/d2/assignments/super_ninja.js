class Ninja {
	constructor(name, health, speed = 3, strength = 3) {
		this.name = name;
		this.health = health;
		this.speed = speed;
		this.strength = strength;
	}

	sayName() {
		console.log(this.name);
	}

	showStats() {
		console.log(`Name: ${this.name}`);
		console.log(`Speed: ${this.speed}`);
		console.log(`Strength: ${this.strength}`);
		console.log(`Health: ${this.health}`);
	}
	drinkSake() {
		this.health = this.health + 10;
	}
}

class Sensei extends Ninja {
	constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
		super(name, health, speed, strength);
	}

	speakWisdom() {
		this.drinkSake();
		console.log("Much wiser, you are.");
	}
}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();
