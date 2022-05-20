import React from "react";
import PropTypes from "prop-types";

import "./UserList.css";
import { DeleteIcon } from "../../assets";

const User = ({ user, onDelete }) => {
  const getUserShortName = (name) => {
    let shortName = "";
    name.split(" ").forEach((element) => {
      if (element[0]) shortName += element[0].toUpperCase();
    });
    return shortName;
  };

  return (
    <div className="user">
      <div className="circle">
        <span>{getUserShortName(user.name)}</span>
      </div>
      <div className="user-detail">
        <h4>{user.name}</h4>
        {user.role && <p>{user.role}</p>}
      </div>
      <DeleteIcon className="delete-icon" onClick={() => onDelete(user.id)} />
    </div>
  );
};

const UserList = ({ users, onDelete }) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <User user={user} key={user.id} onDelete={(id) => onDelete(id)} />
      ))}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
  onDelete: PropTypes.func,
};

export default UserList;
