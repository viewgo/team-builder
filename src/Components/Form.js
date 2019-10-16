import React, { useState } from "react";

function Form(props) {
  const [newTeam, setNewTeam] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    console.log(event.target.value);
    setNewTeam({ ...newTeam, [event.target.name]: event.target.value });
    console.log(newTeam);
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(e);
    props.addNewMember(newTeam);
    setNewTeam({ name: "", email: "", role: "" });
  };

  return (
    <>
      <h2>Add A Team Member</h2>
      <form onSubmit={submitForm}>
        <div className="form-inputs">
          {/* <label htmlFor="name">Name</label> */}
          <input
            name="name"
            id="name"
            type="text"
            placeholder="First Name"
            value={newTeam.name}
            onChange={changeHandler}
          />

          {/* <label htmlFor="email">Email</label> */}
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Email Address"
            value={newTeam.email}
            onChange={changeHandler}
          />

          {/* <label htmlFor="role">Role</label> */}
          {/* <input name="role" id="role" type="text" placeholder="Role" value={newTeam.role} onChange={changeHandler} /> */}

          <select name="role" id="role" placeholder="Role" value={newTeam.role} onChange={changeHandler}>
            <option selected value="Web Designer">
            Web Designer
            </option>
            <option value="Front End Developer">Front End Developer</option>
            <option value="Back End Developer">Back End Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="UI Designer">UI Designer</option>
            <option value="UX Designer">UX Designer</option>
            <option value="Data Engineer">Data Engineer</option>
            <option value="Product Manager">Product Manager</option>
          </select>
        </div>

        <button type="submit">Add Team Member</button>
      </form>
    </>
  );
}

export default Form;
