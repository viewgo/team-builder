import React from "react";

function Team(props) {
  return (
    <div>
      <h2>Team Members</h2>
      <div className="team">
        {props.team.map((element, index) => (
          <div key={index} className="member-card">
            <h3>{element.name}</h3><br/>
            <span>{element.email}</span><br/>
            <span>{element.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
