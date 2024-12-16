import React from "react";

const Userlist = ({ users }) => {
  return (
    <div>
      <h1>Userlist</h1>
      <div className="">
        {users.map((user) => {
          return (
            <div className="card">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Password: {user.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Userlist;
