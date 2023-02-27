import React, { Component } from "react";

class HoverIncrem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "JESSOR INT",
    };
  }
  hover = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 100,
      };
    });
  };

  render() {
    const { count, name } = this.state;
    return (
      <div>
        <h3 onMouseOver={this.hover}>
          {name} Hovered {count} times
        </h3>
      </div>
    );
  }
}

export default HoverIncrem;
