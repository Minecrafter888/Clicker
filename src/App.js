import './App.css'
import React, { useState } from "react";

function App() {
  const [eggCounter, setEggCounter] = useState(0)
  const [people, setPeople] = useState(0)
  const egg = (e) => {
    const value = e.target.value
    if(value === "+"){
      setEggCounter(eggCounter + 1)
    }if(value === "-"){
      setEggCounter(eggCounter - 1)
    }
  }
  const clear = () =>{
    setEggCounter(0)
    setPeople(0)
  }
  const People = (e) =>{
    const value = e.target.value
    if(value === "+"){
      setPeople(people + 1)
    }if(value === "-"){
      setPeople(people - 1)
    }
  }
  return (
    <div>
      <div className='div'>
        <h1 className='eggs'>Eieren</h1>
        <button className='increase' onClick={egg} value={"+"}>+</button>
        <p className='counter'>{eggCounter}</p>
        <button className='decrease' onClick={egg} value={"-"}>-</button>
      </div>
      <div className='div'>
        <h1 className='people'>Personen</h1>
        <button className='increase' onClick={People} value={"+"}>+</button>
        <p className='counter'>{people}</p>
        <button className='decrease' onClick={People} value={"-"}>-</button>
      </div>
      <div>
      <button style={{ display: 'block', margin: 'auto' }} className='reset' onClick={clear}>Reset both</button>
      </div>
    </div>
  );
}

export default App;
