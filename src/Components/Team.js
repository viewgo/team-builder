import React from "react";

function Team(props) {
  return (
    <div className="team">
      <h2>Team Members</h2>

      <div className="member-card">
        {props.team.map((element, index) => (
          <div key={index}>
            <h3>{element.name}</h3>
            <h4>{element.email}</h4>
            <h4>{element.role}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
