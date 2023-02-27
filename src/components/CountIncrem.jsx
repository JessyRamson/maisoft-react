import React, { Component } from "react";

class CountIncrem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "jESSOR INT",
    };
  }
  increment = () => {
    this.setState(
      (prevState) => {
        return {
          count: prevState.count + 1,
        };
      },
      () => {
        console.log(this.state.count);
      }
    );
  };

  render() {
    const { name, count } = this.state;
    return (
      <div>
        <button onClick={this.increment}>
          {" "}
          {name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default CountIncrem;
