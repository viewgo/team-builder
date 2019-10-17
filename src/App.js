import React, { useState } from "react";
import "./App.css";

import Form from "./Components/Form";
import Team from "./Components/Team";
import { data } from "./data";

function App() {
  const [team, setTeam] = useState(data);
  const [memberToEdit, setMemberToEdit] = useState();

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  };

  const editButton = data => {
    window.scrollTo({top: 0, behavior: "smooth"});
    setMemberToEdit(data);
  };

  const editMember = data => {
    team.map((element, index) => {
      if (
        memberToEdit.name === element.name &&
        memberToEdit.email === element.email &&
        memberToEdit.role === element.role
      ) {
        console.log("FOUND MATCH");

        let stateCopy = Object.assign({}, team);

        stateCopy[index].name = data.name;
        stateCopy[index].email = data.email;
        stateCopy[index].role = data.role;

        console.log("The state copy is: ", stateCopy);
      }
    });

    console.log("After edit: ", team);
    setMemberToEdit();
  };


  return (
    <div className="App">
      <Form addNewMember={addNewMember} editMember={editMember} memberToEdit={memberToEdit} />

      <Team team={team} editButton={editButton} />
    </div>
  );
}

export default App;
