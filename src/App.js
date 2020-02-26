import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {

  const [personState, setPersonState] = useState({
      persons: [
        {name: 'Gabriel', age: 23},
        {name: 'Maria', age: 63},
        {name: 'Olegario', age: 72}
      ],
    });

    const [otherState, setOtherState] = useState('Some other state');

    console.log(personState, otherState);

    const switchNameHandler = () => {
      setPersonState({
        persons: [
          {name: 'Gabriel', age: 22},
          {name: 'Maria', age: 63},
          {name: 'Olegario', age: 52}
        ],

        otherState: setPersonState.otherState
      })
    }

    const nameChangedHandler = (event) => {
      setPersonState({
        persons: [
          {name: 'Gabriel', age: 22},
          {name: event.target.value, age: 63},
          {name: 'Olegario', age: 52}
        ],
      })
    }

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

  return(
    <div className="App">
      <h1>I'm Person</h1>
      <button
        style={style} 
        onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personState.persons[0].name} 
        age={personState.persons[0].age}/>
      <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}
        click={switchNameHandler.bind(this, 'Mariaa')}
        changed={nameChangedHandler}>My hobbies: Racing</Person>
      <Person 
        name={personState.persons[2].name} 
        age={personState.persons[2].age}/>
   </div>
  );

}

export default App;