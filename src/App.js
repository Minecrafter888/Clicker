import './App.css'
import React, { useState } from "react";

function App() {
  const [eggcounter, seteggcounter] = useState(0)
  const [people, setpeople] = useState(0)
  const pplincrease = () =>{
    setpeople(people + 1)
  }
  const ppldecrease = () =>{
    setpeople(people - 1)
  }
  const eggincrease = () => {
    seteggcounter(eggcounter + 1)
  }
  const eggdecrease = () => {
    seteggcounter(eggcounter - 1)
  }
  return (
    <div>
        <center><h1 className='eggs'>Eieren</h1></center>
        <center><button className='INCREASE' onClick={eggincrease}>+</button></center>
        <center><p className='COUNTER'>{eggcounter}</p></center>
        <center><button className='DECREASE' onClick={eggdecrease}>-</button></center>
        <center><h1 className='people'>Personen</h1></center>
        <center><button className='pplin' onClick={pplincrease}>+</button></center>
        <center><p className='ppls'>{people}</p></center>
        <center><button className='pplde' onClick={ppldecrease}>-</button></center>
    </div>
  );
}

export default App;
