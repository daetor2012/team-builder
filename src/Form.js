import React, { useState } from "react";




 function Form(props) {
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [role, setRole] = useState("")
     const handleNameChange = event => {
         setName(event.target.value)
         
     };

     const handleEmailChange = event => {
         setEmail(event.target.value)
     };

     const handleRoleChange = event => {
         setRole(event.target.value)
     };
     const handleSubmit = event => {
         event.preventDefault();
         const newTeamMember = {name: name, email: email, role: role };
         const newTeam = Array.from(props.team);
         newTeam.push(newTeamMember);
         props.setTeam(newTeam);
         setName("");
         setEmail("");
         setRole("");
         

         
     }

     return (
         <div>
             <form>
                 <label>
                     Name:
                     <input type="text" value={name} onChange={handleNameChange} />
                 </label>
                 <label>
                     Email:
                     <input type="text" value={email} onChange={handleEmailChange} />
                 </label>
                 <label>
                     Role:
                     <input type="text" value={role} onChange={handleRoleChange} />
                 </label>
                 <button onClick={handleSubmit}>Submit</button>
             </form>
         </div>
     )
 }
 export default Form;