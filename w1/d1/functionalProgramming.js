const testScores = [70, 50, 98, 80, 30, 100];

// How to create a new aray to converrt test scores into pass or fail
const passOrFailResults = [];

for (let i = 0; i < testScores.length; i++) {
	const element = testScores[i];
	if (element >= 70) {
		passOrFailResults.push("pass");
	} else {
		passOrFailResults.push("fail");
	}
}
console.log(passOrFailResults);
//[70, 50, 98, 80, 30, 100] => [ 'pass', 'fail', 'pass', 'pass', 'fail', 'pass' ]

const passOrFailResults2 = testScores.map(function (num, idx) {
	if (num >= 70) {
		return "pass";
	} else {
		return "fail";
	}
});
console.log(passOrFailResults2);

const surplusOrDeficit = testScores.map((num, idx) => num - 70);
console.log(surplusOrDeficit);

Array.prototype.transform = (callbackFn) => {
	const newArray = [];

	for (let i = 0; i < this.length; i++) {}
};

const newArray = [];
newArray.transform();

const above70Scores = testScores.filter((num) => num > 70);
console.log(above70Scores);
