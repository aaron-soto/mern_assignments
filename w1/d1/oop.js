/*
Use OOP to create message boards and users that can send messages on the message board.

When to use dot vs bracket notation?
  Use brackets when the keyname is stored in a var.
  If keyname has a space in it. (i.e. user.full name should be user["full name"])
*/

class MessageBoard {
	/**
	 *
	 * @param {string} name The name of the message board.
	 * @param {string} topic The topic ofthe message board.
	 * @return {MessageBoard}
	 */
	constructor(name, topic) {
		this.name = name;
		this.topic = topic;
		this.messages = [];
	}

	/**
	 * Finds the top user on messages sent
	 * @return {User} The most active user
	 */
	topUser() {
		const frequencyTable = {};

		let topUser = null;
		let maxMsgCount = 0;

		for (let i = 0; i < this.messages.length; i++) {
			const msg = this.messages[i];

			if (frequencyTable.hasOwnProperty(msg.author.username)) {
				frequencyTable[msg.author.username]++;
			} else {
				frequencyTable[msg.author.username] = 1;
			}

			if (frequencyTable[msg.author.username] > maxMsgCount) {
				maxMsgCount = frequencyTable[msg.author.username];
				topUser = msg.author;
			}
		}
		return topUser;
	}
}

const messageBoardPuppies = new MessageBoard(
	"Cute Puppies",
	"Everything having to do with the cutest puppies."
);

class User {
	constructor(firstName, lastName, username) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.messages = [];
	}

	/**
	 * methods go after constructor
	 */
	fullname() {
		return this.firstName + " " + this.lastName;
	}

	sendMessage(board, content) {
		const msg = {
			content: content,
			date: new Date(),
			author: this,
			messageBoard: board,
		};

		board.messages.push(msg);
		this.messages.push(msg);
	}
}

let user1 = new User("Aaron", "Soto", "sotobaggins");
let user2 = new User("Jesus", "Sandoval", "secondComing");

console.log(user1.fullname());
console.log(user2.fullname());

user1.sendMessage(messageBoardPuppies, "I really love puppies!");
user1.sendMessage(messageBoardPuppies, "I cannot lie about that");
user2.sendMessage(messageBoardPuppies, "I love them as well!");

console.log(messageBoardPuppies.topUser());
