import React, { Component } from "react";

const UpdatedComponent = (OriginalComp) => {
  class NewComp extends Component {
    render() {
      return <OriginalComp name="jessy" />;
    }
  }
  return NewComp;
};
export default UpdatedComponent;
