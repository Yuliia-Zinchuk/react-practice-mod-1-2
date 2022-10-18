import { Component } from "react";
import { Label } from "./AddUserForm.styled";

export class AddUserForm extends Component {
  state = {
    name: "",
    email: "",
  };

  hdlrNameInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.addUser(this.state);
    this.onFormReset();
  };

  onFormReset = () => {
    this.setState({ name: "", email: "" });
  };

  render() {
    const { name, email } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <Label>
            Name
            <input
              value={name}
              type="text"
              name="name"
              onChange={this.hdlrNameInput}
            />
          </Label>

          <Label>
            Email
            <input
              value={email}
              type="text"
              name="email"
              onChange={this.hdlrNameInput}
            />
          </Label>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
