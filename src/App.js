import React, { useState } from "react";
import "./App.css";

import Form from "./Components/Form";
import Team from "./Components/Team";
import {data} from "./data";

function App() {
  const [team, setTeam] = useState(data);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      <Form addNewMember={addNewMember} />

      <Team team={team} />
    </div>
  );
}

export default App;
