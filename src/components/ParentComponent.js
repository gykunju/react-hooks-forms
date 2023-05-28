import React, { useState } from 'react'
import Form from './Form';

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
  
    function handleFirstName(e){
        setFirstName(e.target.value)
    }

    function handleLastName(e){
        setLastName(e.target.value)
    }
    return (
    <div>
    <Form 
    firstName={firstName} 
    lastName={lastName}
    handleFirstName={handleFirstName}
    handleLastName={handleLastName}
    />
    </div>
  )
}

export default ParentComponent