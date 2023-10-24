import './App.css'
import React, { useState } from "react";

function App() {
  const [eggcounter, seteggcounter] = useState(0)
  const [people, setpeople] = useState(0)
  const eggincrease = () => {
    seteggcounter(eggcounter + 1)
  }
  const eggdecrease = () => {
    seteggcounter(eggcounter - 1)
  }
  const clear = () =>{
    seteggcounter(0)
    setpeople(0)
  }
  const peopleincrease = () =>{
    setpeople(people + 1)
  }
  const peopledecrease = () =>{
    setpeople(people - 1)
  }
  return (
    <div>
      <div className='div'>
        <h1 className='eggs'>Eieren</h1>
        <button className='increase' onClick={eggincrease}>+</button>
        <p className='counter'>{eggcounter}</p>
        <button className='decrease' onClick={eggdecrease}>-</button>
      </div>
      <div className='div'>
        <h1 className='people'>Personen</h1>
        <button className='increase' onClick={peopleincrease}>+</button>
        <p className='counter'>{people}</p>
        <button className='decrease' onClick={peopledecrease}>-</button>
        
      </div>
      <center><button className='reset' onClick={clear}>Reset both</button></center>
    </div>
  );
}

export default App;
