import React from "react";

const PersonCard = (props) => {
  return (
    <div>
      <h2>
        {props.lastName}, {props.firstName}
      </h2>
      <p>Age: {this.state.age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={this.handleClick}>
        Birthday button for {props.firstName}
      </button>
    </div>
  );
};

// class PersonCard extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       age: props.age,
//     };
//   }

//   handleClick = (event) => {
//     this.setState({
//       age: this.state.age + 1,
//     });
//   };

//   render() {
//     const { firstName, lastName, age, hairColor } = this.props;
//     return (

//     );
//   }
// }

export default PersonCard;
