import React, { useState } from 'react';
import './App.css';
import initialTeam from "./team";
import Form from "./Form";
function App() {
  const [team, setTeam] = useState(initialTeam);
  console.log(team);
  
  return (
    <div className="App">
      <h1>Hola</h1>
      <Form team={team} setTeam={setTeam} />
    </div>
  );
}

export default App;
