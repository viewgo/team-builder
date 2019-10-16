import React, { useState } from "react";

function Form(props) {

  const [newTeam, setNewTeam] = useState([{
    name: "",
    email: "",
    role: ""
  }]);


  const changeHandler = event => {
    console.log(event.target.value);
    setNewTeam({ ...newTeam, [event.target.name]: event.target.value });
    
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(e);
    props.addNewMember(newTeam);
    setNewTeam({ name: "", email: "", role: "" });
  };

  return (
    <>
      <form onSubmit={submitForm}>

        <label htmlFor="name">Name</label>
        <input name="name" 
               id="name" 
               type="text" 
               placeholder="First Name" 
               onChange={changeHandler} 
               value={newTeam.name}/>

        <label htmlFor="email">Email</label>
        <input name="email" 
               id="email" 
               type="text" 
               placeholder="Email Address"
               onChange={changeHandler} 
               value={newTeam.email}/>

        <label htmlFor="role">Role</label>
        <input name="role" 
               id="role" 
               type="text" 
               placeholder="Role" 
               onChange={changeHandler}
               value={newTeam.role}/>

        <button type="submit">Add Team Member</button>

      </form>
    </>
  );
}

export default Form;
