import React, { useState } from "react";
import "./App.css";

import Form from "./Components/Form";
import Team from "./Components/Team";

function App() {
  const [team, setTeam] = useState([{ name: "Hugo", email: "asdfk@123.com", role: "Full Stack Web Developer" }]);

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
