// regular function
var sayHello = function (name) {
	console.log("Hello " + name);
};

sayHello("Aaron");

// e6 arrow function
const sayHello = (name) => {
	console.log("Hello " + name);
};

// OR

const sayHello = (name) => console.log(`Hello ${name}`);

// ----------------------------------------------------------------

class Deck {
	constructor() {
		const suits = ["Diamond", "Heart", "Spade", "Club"];
		const faces = [
			"Ace",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"Jack",
			"Queen",
			"King",
		];
		const deck = [];

		suits.forEach((suit) => {
			faces.forEach((face) => {
				deck.push(this.createCard(suit, face));
			});
		});
	}
}
