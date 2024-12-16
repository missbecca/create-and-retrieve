import { useState } from "react";
import Forms from "./Components/Forms";
import Userlist from "./Components/Userlist";

const App = () => {
  const [users,setUser]=useState([
    {
      name:"Karrin",
      email:"ijdhyt@gmail.com",
      password:"udhiji"

    },
    {
      name:"ali",
      email:"ijdhyt@gmail.com",
      password:"udhiji"

    },

  ])
  return (
    <div>
      <Forms setUser={setUser} />
      <Userlist users={users} />
    </div>
  );
};

export default App;
