import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome JESSOR INT</div>;
    } else {
      return <div>Hello Guest</div>;
    }
    // return (
    //   <div>
    //     <div>Welcome JESSOR INT</div>
    //     <div>HelloGuest</div>
    //   </div>
    // );
  }
}

export default Form;
