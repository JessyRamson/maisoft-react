import React, { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      email: "",
      select: "react",
      textarea: "",
    };
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  passwordChangeHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  selectChangeHandler = (event) => {
    this.setState({
      select: event.target.value,
    });
  };
  textareaChangeHandler = (event) => {
    this.setState({
      textarea: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2
          style={{
            color: "red",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          This section is the form section.
        </h2>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.nameChangeHandler}
              placeholder="jessy"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.passwordChangeHandler}
              placeholder="password"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.emailChangeHandler}
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label>Topics</label>
            <select
              value={this.state.select}
              onChange={this.selectChangeHandler}
            >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            <label>Summary</label>
            <br />
            <textarea
              placeholder="Drop your summary here..."
              onChange={this.textareaChangeHandler}
              value={this.state.textarea}
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default ClassForm;
