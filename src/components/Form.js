import React from "react";

function Form({firstName, lastName, handleFirstName, handleLastName}) {
  function handleSubmit(e){
    e.preventdefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstName} value={firstName} />
      <input type="text" onChange={handleLastName} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
