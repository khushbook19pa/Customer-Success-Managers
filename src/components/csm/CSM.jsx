import React, { useReducer } from "react";
import csmReducer from "../../reducer/csm-reducer";
import UserSearch from "../user-seearch/UserSearch";
import UserList from "../userList/UserList";

import "./CSM.css";

const Csm = () => {
  const [state, dispatch] = useReducer(csmReducer, []);

  return (
    <section>
      <div className="section-heading">
        <h2>Customer Success Mangers</h2>
      </div>
      <UserSearch
        selectedUsers={state}
        onChange={(userList) => dispatch({ type: "UPDATE", userList })}
      />
      <UserList
        users={state}
        onDelete={(id) => dispatch({ type: "DELETE", id })}
      />
    </section>
  );
};

export default Csm;
