import React, { useState } from "react";
import Person from "./components/Person";
import "./App.css";
import UserOutput from "./components/UserOutput";
import UserInput from "./components/UserInput";

function App() {
  const [falseState, setTrue] = useState(false);
  const [userName, setUserName] = useState("username");
  const [personsState, setPersons] = useState({
    persons: [
      { name: "Kristo", age: 30 },
      { name: "Random", age: 99 },
      { name: "Mistoimub", age: 1 }
    ],
    stateNr2: ["Not changing"]
  });

  const deletePerson = (personsIndex) => { 
    const persons = personsState.persons;
    persons.splice(personsIndex, 1)
    setPersons({ persons: persons})
    
  }

  const togglePersons = () => {
    if (falseState === false) {
      return setTrue(true);
    } else {
      setTrue(false);
    }
  };

  const changeName = event => {
    setUserName(event.target.value);
  };

  const style = {
    background: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div className="App">
      <div>Hello World!!</div>
      <button onClick={togglePersons} style={style}>
        random
      </button>
      {falseState === true && <div>
      {personsState.persons.map((e, index) => {
        return <Person
        click={() => deletePerson(index)} 
        key={e.index} 
        name={e.name} 
        age={e.age} />
      })}</div>}
      <UserOutput name={userName} value={personsState.name} />
      <UserInput changeName={changeName} />
    </div>
  );
}

export default App;
