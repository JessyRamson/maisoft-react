import React, { Component } from "react";

class RefClass extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  //   componentDidMount() {
  //     console.log(this.inputRef);

  //   }
  focusinput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.focusinput}>Clicked</button>
      </div>
    );
  }
}

export default RefClass;
