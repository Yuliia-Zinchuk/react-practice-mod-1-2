import PropTypes from "prop-types";

import { Paragraph, Span } from "./User.styled";
import { UpdateUserForm } from "../Form/UpdateUserForm";

export const User = ({
  user: { name, email, id, hadjob },
  userDelete,
  changeJobStatus,
  showUpdateForm,
  userToUpdate,
  updateUser,
}) => {
  const isOrange = email.includes("biz");
  return (
    <>
      <Paragraph>
        Name: <Span>{name}</Span>
      </Paragraph>
      <Paragraph>
        Email: <Span isOrange={isOrange}>{email}</Span>
      </Paragraph>
      <Paragraph>
        HadJob: <span>{hadjob.toString()}</span>
      </Paragraph>
      <button onClick={() => userDelete(id)}>Delete</button>
      <button onClick={() => changeJobStatus(id)}>Change job status</button>
      <button onClick={() => showUpdateForm(id)}>Update User</button>
      {userToUpdate && userToUpdate.id === id && (
        <UpdateUserForm userToUpdate={userToUpdate} updateUser={updateUser} />
      )}
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, // name of the users  object  being
  }).isRequired,
};
