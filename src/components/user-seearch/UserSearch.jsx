import React, { useState } from "react";
import USERS from "../../assets/users";

import "./UserSearch.css";

import AsyncSelect from "react-select/async";

const UserSearch = ({ selectedUsers, onChange }) => {
  const [value, setValue] = useState();

  const selectedIds = selectedUsers.map((u) => u.id);

  const filterColors = (inputValue) => {
    return USERS.filter(
      (i) =>
        !selectedIds.includes(i.id) &&
        (i.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          i.email.toLowerCase().includes(inputValue.toLowerCase()))
    );
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      const users = filterColors(inputValue).map((u) => ({
        value: u.id,
        label: u.name,
      }));
      resolve(users);
    });

  const onClick = () => {
    const users = [];
    value.forEach((element) => {
      let [a] = USERS.filter((u) => u.id === element.value);
      if (a) {
        users.push(a);
      }
    });
    onChange(users);
    setValue([]);
  };

  return (
    <div className="user-search">
      <div className="input">
        <AsyncSelect
          isMulti
          name="colors"
          value={value}
          loadOptions={promiseOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(data) => setValue(data)}
        />
      </div>
      <button onClick={onClick}>Add CSM</button>
    </div>
  );
};

export default UserSearch;
