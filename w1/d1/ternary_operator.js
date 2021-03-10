//  basic if statement

let canAfford = (itemPrice, accountBalance) => {
	if (itemPrice > accountBalance) {
		return `Cannot afford! You are $${itemPrice - accountBalance} short`;
	} else {
		return "Can Afford!";
	}
};

// ternary statement
let canAfford = (itemPrice, accountBalance) => {
	return itemPrice > accountBalance
		? `Cannot afford! You are $${itemPrice - accountBalance} short`
		: "Can afford!";

	//  is the itemPrice > accountBalance
	// yes? then return "cannot afford"
	// no then return "can afford"
};
