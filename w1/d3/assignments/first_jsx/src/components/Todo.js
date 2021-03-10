import React from "react";

class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoItems: [
				"Learn React",
				"Climb Mt. Everest",
				"Run a marathon",
				"Feed the dogs",
			],
		};
	}

	render() {
		return (
			<div>
				<h1>Hello Dojo!</h1>
				<h3>Things I need to do:</h3>
				<ul>
					{this.state.todoItems.map((todoItem, i) => {
						return <li key={i}>{todoItem}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default Todo;
