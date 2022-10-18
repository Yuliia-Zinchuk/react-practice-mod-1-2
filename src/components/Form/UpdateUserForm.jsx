import { Component } from "react";
import { Label } from "./AddUserForm.styled";

export class UpdateUserForm extends Component {
  state = {
    name: this.props.userToUpdate.name,
    email: this.props.userToUpdate.email,
  };

  hdlrNameInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.updateUser({ ...this.props.userToUpdate, ...this.state });
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
