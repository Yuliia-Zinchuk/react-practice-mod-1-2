import { nanoid } from "nanoid";

import PropTypes from "prop-types";

import { Component } from "react";

import { users } from "../data/users";
import { UserList } from "./UserList/UserList";
import { Button } from "./User/Button";
import { AddUserForm } from "./Form/AddUserForm";

export class App extends Component {
  state = {
    users,
    isListShown: false,
    userToUpdate: {},
  };

  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  clickHandler = () => {
    this.setState({ isListShown: true });
  };

  userDelete = (userId) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== userId),
    }));
  };

  changeJobStatus = (userId) => {
    this.setState((prevState) => ({
      users: prevState.users.map((user) =>
        user.id !== userId ? user : { ...user, hadjob: !user.hadjob }
      ),
    }));
  };

  addUser = (data) => {
    const newUser = {
      ...data,
      hadjob: false,
      id: nanoid(),
    };
    this.setState((prevState) => ({ users: [...prevState.users, newUser] }));
  };

  showUpdateForm = (id) => {
    const userToUpdate = this.state.users.find((user) => user.id === id);

    this.setState({
      userToUpdate,
    });
  };

  updateUser = (user) => {
    const userIndex = this.state.users.findIndex((u) => u.id === user.id);
    const arrUsersToChange = [...this.state.users];
    arrUsersToChange.splice(userIndex, 1, user);
    this.setState({ users: arrUsersToChange, userToUpdate: {} });
  };

  render() {
    const { isListShown, users, userToUpdate } = this.state;
    return (
      <>
        {isListShown ? (
          <>
            <AddUserForm addUser={this.addUser} />
            <UserList
              userToUpdate={userToUpdate}
              showUpdateForm={this.showUpdateForm}
              users={users}
              userDelete={this.userDelete}
              changeJobStatus={this.changeJobStatus}
              updateUser={this.updateUser}
            />
          </>
        ) : (
          <Button
            type="button"
            text="Show users list"
            clickHandler={this.clickHandler}
          />
        )}
      </>
    );
  }
}
