import { User } from "../User/User";

export const UserList = ({
  users,
  userDelete,
  changeJobStatus,
  showUpdateForm,
  userToUpdate,
  updateUser,
}) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User
              user={user}
              userDelete={userDelete}
              changeJobStatus={changeJobStatus}
              showUpdateForm={showUpdateForm}
              userToUpdate={userToUpdate}
              updateUser={updateUser}
            />
          </li>
        );
      })}
    </ul>
  );
};
