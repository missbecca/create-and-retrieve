import React, { useState } from "react";

const Forms = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  function handleNamechange(e) {
    setName(e.target.value);
  }
  function handleEmailchange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordchange(e) {
    setpassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let user = {
      name,
      email,
      password,
    };
    setUser((prev) => [...prev, user]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNamechange}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailchange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordchange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Forms;
